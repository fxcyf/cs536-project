#!/bin/bash

# Note: Mininet must be run as root.  So invoke this shell script
# using sudo.


iperf_port=5001
result_dir="results.txt"
rm -rf $result_dir
touch $result_dir


for site in amazon newyorktimes wsj wikipedia; do
    for delay in 10 50 100; do
        echo "$site" >> $result_dir
        echo "$delay" >> $result_dir

        #disable tcp fast open
        echo "0" > /proc/sys/net/ipv4/tcp_fastopen
        python tcp_fastopen.py -s $site --delay $delay -d $result_dir

        #enable tcp fast open
        echo "519" > /proc/sys/net/ipv4/tcp_fastopen
        python tcp_fastopen.py -s $site --delay $delay -d $result_dir --tfo
    done
done

#get results
python parse_results.py -f $result_dir > parsed_results.txt
#show results
cat parsed_results.txt
