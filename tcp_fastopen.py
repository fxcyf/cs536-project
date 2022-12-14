#!/usr/bin/python3

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
import json

NUM_TRIALS = 1

parser = ArgumentParser(description="TFO tests")

parser.add_argument('--site', '-s',
                    type=str,
                    help="Name of website to download from",
                    required=True)

parser.add_argument('--delay',
                    type=float,
                    help="Link propagation delay (ms)",
                    required=True)

parser.add_argument('--dir', '-d',
                    help="Directory to store outputs",
                    required=True)

parser.add_argument('--tfo', '-t',
                    help="set TCP Fast Open enabled",
                    action="store_true") 

parser.add_argument('--cong',
                    help="Congestion control algorithm to use",
                    default="bic")

parser.add_argument('--bw-net', '-b',
                    type=float,
                    help="Bandwidth of bottleneck (network) link (Mb/s)",
                    required=True,
		    default=4)


# Expt parameters
args = parser.parse_args()

class Topo(Topo):
    "Simple topology for tfo experiment."

    def build(self, n=2):
        switch = self.addSwitch('s0')

        h1 = self.addHost('h1')
        h2 = self.addHost('h2')
        delay = "{0}ms".format(args.delay)
        # self.addLink(h1, h2, delay=delay)
        self.addLink(h1, switch, delay=delay, bw=args.bw_net)
        self.addLink(switch, h2, delay=delay, bw=args.bw_net)
        return


def ping_test(net):
    print("Starting RTT test...")
    h2 = net.get('h2')
    h1 = net.get('h1')
    tolerance_ms = 100000
    def validate_rtt(client, server, target):
        print("server IP: {}".format(server.IP()))
        client_process = client.popen('ping -c 1 {0}'.format(server.IP()), stdout=PIPE)
        stdout, strerr = client_process.communicate()
        m = re.search('time=(.*) ', stdout.decode("utf-8", "ignore"))
        print("ping test stdout: {}".format(stdout.decode("utf-8")))

        if not m:
            message = "FAILED: can't ping from {0} to {1}".format(client, server)
            T.cprint(message, "red", attrs=["bold"])
            T.cprint("Error message: {0}".format(stdout), "red")
            return False

        time = float(m.group(1))
        min_rtt = target - tolerance_ms
        max_rtt = target + tolerance_ms

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
    proc = h2.popen("python3 http/webserver.py {0}".format('--tfo' if tfo_enabled else ''), shell=True)
    return [proc]

def run_performance_tests(net):
    h2 = net.get('h2')
    h1 = net.get('h1')
    h1_process = h1.popen("time sudo mget -r --delete-after -o log {0}/http/{1}".format(h2.IP(), args.site + '.html'), shell=True, stdout=PIPE, stderr=PIPE)
    stdout, stderr = h1_process.communicate() #time goes in stderr
    m = re.search('real\s+(.*)m(.*)s', stderr.decode("utf-8", "ignore"))
    print("run performance test stderr: {}".format(stderr.decode("utf-8")))
    minute = float(m.group(1))
    second = float(m.group(2))

    return minute * 60 + second


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
    proc = start_webserver(net, args.tfo)[0]
    # This performs a basic all pairs ping test.
    net.pingAll()

    #test conectivity
    ping_test(net)

    result = sum(run_performance_tests(net) for i in range(NUM_TRIALS))/float(NUM_TRIALS)
    print(result)
    with open(args.dir, "a") as myfile:
        myfile.write("          " + str(result) + '\n')

    proc.kill()

    net.stop()

    # Ensure that all processes you create within Mininet are killed.
    # Sometimes they require manual killing.
    os.system("killall -9 top bwm-ng tcpdump cat mnexec iperf; mn -c")
    Popen("pgrep -f webserver.py | xargs kill -9", shell=True).wait()

if __name__ == "__main__":
    try:
        tcp_fastopen()
    except:
        print("-"*80)
        print("Caught exception.  Cleaning up...")
        print("-"*80)
        import traceback
        traceback.print_exc()
        os.system("killall -9 top bwm-ng tcpdump cat mnexec iperf; mn -c")
        Popen("pgrep -f webserver.py | xargs kill -9", shell=True).wait()
