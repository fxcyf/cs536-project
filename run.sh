#!/bin/bash

# Note: Mininet must be run as root.  So invoke this shell script
# using sudo.

time=200
bwnet=4
delay=10

iperf_port=5001

#enable tcp fast open
echo "519" > /proc/sys/net/ipv4/tcp_fastopen
python tcp_fastopen.py -b $bwnet --delay $delay -d withtfo --tfo

#disable it
echo "0" > /proc/sys/net/ipv4/tcp_fastopen
python tcp_fastopen.py -b $bwnet --delay $delay -d notfo --tfo
