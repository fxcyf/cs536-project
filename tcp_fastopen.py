#!/usr/bin/python

"CS244 Spring 2015 Assignment 3: TCP fast open"

from mininet.topo import Topo
from mininet.node import CPULimitedHost
from mininet.link import TCLink
from mininet.net import Mininet
from mininet.log import lg, info
from mininet.util import dumpNodeConnections
from mininet.cli import CLI

from subprocess import Popen, PIPE
from time import sleep, time
from multiprocessing import Process
from argparse import ArgumentParser

import termcolor as T
import re

import sys
import os
import math

parser = ArgumentParser(description="TFO tests")
parser.add_argument('--bw-host', '-B',
                    type=float,
                    help="Bandwidth of host links (Mb/s)",
                    default=4)

parser.add_argument('--bw-net', '-b',
                    type=float,
                    help="Bandwidth of bottleneck (network) link (Mb/s)",
                    required=True)

parser.add_argument('--delay',
                    type=float,
                    help="Link propagation delay (ms)",
                    required=True)

parser.add_argument('--dir', '-d',
                    help="Directory to store outputs",
                    required=True)

parser.add_argument('--time', '-t',
                    help="Duration (sec) to run the experiment",
                    type=int,
                    default=10)

# Linux uses CUBIC-TCP by default that doesn't have the usual sawtooth
# behaviour.  For those who are curious, invoke this script with
# --cong cubic and see what happens...
# sysctl -a | grep cong should list some interesting parameters.
parser.add_argument('--cong',
                    help="Congestion control algorithm to use",
                    default="reno")

# Expt parameters
args = parser.parse_args()

class Topo(Topo):
    "Simple topology for tfo experiment."

    def build(self, n=2):
        h1 = self.addHost('h1')
        h2 = self.addHost('h2')

        # Here I have created a switch.  If you change its name, its
        # interface names will change from s0-eth1 to newname-eth1.
        switch = self.addSwitch('s0')

        delay = "{0}ms".format(args.delay/2.0)
        self.addLink(h1, switch, bw=args.bw_host, delay=delay)
        self.addLink(switch, h2, bw=args.bw_net, delay=delay)
        return

def ping_test(net):
    print("Starting RTT test...")
    h2 = net.get('h2')
    h1 = net.get('h1')
    tolerance_ms = 1
    def validate_rtt(client, server, target):
        client_process = client.popen('ping -c 1 {0}'.format(server.IP()), stdout=PIPE)
        stdout, _ = client_process.communicate()
        m = re.search('time=(.*) ', stdout)
        if not m:
            message = "FAILED: can't ping from {0} to {1}".format(client, server)
            T.cprint(message, "red", attrs=["bold"])
            T.cprint("Error message: {0}".format(stdout), "red")
            return False

        time = float(m.group(1))
        min_rtt = target * 2 - tolerance_ms
        max_rtt = target * 2 + tolerance_ms

        if abs(time - target) > tolerance_ms:
            message = "FAILED: bad delay({0}ms) from {1} to {2}".format(time, client, server)
            T.cprint(message, "red", attrs=["bold"])
            T.cprint("    Outside valid RTT range: {0}ms - {1}ms".format(min_rtt, max_rtt), "red")
        else:
            T.cprint("{0} -> {1} Link RTT: {2}".format(client, server, time), "green")
            T.cprint("    In valid RTT range: {0}ms - {1}ms".format(min_rtt, max_rtt), "green")
            return True

    if not validate_rtt(h1, h2, args.delay * 2):
        return False
    T.cprint("All RTT tests passed", "green", attrs=["bold"])
    return True

def start_webserver(net, tfo_enabled):
    h2 = net.get('h2')
    proc = h2.popen("python http/webserver.py", shell=True)
    return [proc]

def run_performance_tests(net):
    h1, h2 = net.get('h1', 'h2')
    client = h1.popen("time sudo mget -p --delete-after --no-http-keep-alive --no-cache {0}/http/Amazon".format(h2.IP()), shell=True, stdout=PIPE, stderr=PIPE)
    stdout, stderr = client.communicate()
    print stdout
    print '------------------------------------------------------'
    print stderr
    

def tcp_fastopen():
    if not os.path.exists(args.dir):
        os.makedirs(args.dir)
    os.system("sysctl -w net.ipv4.tcp_congestion_control=%s" % args.cong)
    topo = Topo()
    topo.build()
    net = Mininet(topo=topo, host=CPULimitedHost, link=TCLink)
    net.start()
    # This dumps the topology and how nodes are interconnected through
    # links.
    dumpNodeConnections(net.hosts)
    # This performs a basic all pairs ping test.
    net.pingAll()

    #test conectivity
    ping_test(net)

    #start webserver with no TFO
    start_webserver(net, tfo_enabled=False)
    non_tfo_results = run_performance_tests(net)
    print 'hit'
    Popen("pgrep -f webserver.py | xargs kill -9", shell=True).wait()

    print 'hi'

    #start webserver with TFO
    #start_webserver(net, tfo_enabled=True)
    #tfo_results = run_performance_tests(net)

    net.stop()

    # Ensure that all processes you create within Mininet are killed.
    # Sometimes they require manual killing.
    Popen("pgrep -f webserver.py | xargs kill -9", shell=True).wait()

if __name__ == "__main__":
    try:
        tcp_fastopen()
    except:
        print "-"*80
        print "Caught exception.  Cleaning up..."
        print "-"*80
        import traceback
        traceback.print_exc()
        os.system("killall -9 top bwm-ng tcpdump cat mnexec iperf; mn -c")
        Popen("pgrep -f webserver.py | xargs kill -9", shell=True).wait()
