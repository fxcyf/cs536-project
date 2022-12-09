#!/bin/bash

# Note: Mininet must be run as root.  So invoke this shell script
# using sudo.

band_width=4
iperf_port=5001
rm -rf results.txt
touch results.txt


for site in amazon; do
    echo "site: $site" >> results.txt
    for delay in 10; do
        echo "  delay: $delay" >> results.txt
        for band_width in 15; do
            # echo "      bandwidth: $band_width" >> results.txt
            # #enable tcp fast open
            # echo "          tfo enabled" >> results.txt
            echo "519" > /proc/sys/net/ipv4/tcp_fastopen
            # # sudo sysctl -w net.ipv4.tcp_fastopen=3
            # python3 tcp_fastopen.py -s $site --delay $delay -b $band_width -d results.txt --tfo

            echo "          tfo disabled" >> results.txt
            #disable it
            echo "0" > /proc/sys/net/ipv4/tcp_fastopen
            # sudo sysctl -w net.ipv4.tcp_fastopen=0
            python3 tcp_fastopen.py -s $site --delay $delay -b $band_width -d results.txt
        done
    done
done

