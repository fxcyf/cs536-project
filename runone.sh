#!/bin/bash

# Note: Mininet must be run as root.  So invoke this shell script
# using sudo.


iperf_port=5001
rm -rf results.txt
touch results.txt


for site in amazon; do
    echo "$site" >> results.txt
    for delay in 10; do
        echo "$delay" >> results.txt
        #enable tcp fast open
        echo "519" > /proc/sys/net/ipv4/tcp_fastopen
        python tcp_fastopen.py -s $site --delay $delay -d results.txt --tfo

        #disable it
        echo "0" > /proc/sys/net/ipv4/tcp_fastopen
        python tcp_fastopen.py -s $site --delay $delay -d results.txt
    done
done

