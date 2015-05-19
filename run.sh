#!/bin/bash

# Note: Mininet must be run as root.  So invoke this shell script
# using sudo.

time=200
bwnet=1.5
delay=10

iperf_port=5001

dir=tfo

python tcp_fastopen.py -b $bwnet --delay $delay -d $dir -t $time 
