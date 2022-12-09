#!/bin/bash

result_dir="results.txt"
rm -rf $result_dir
touch $result_dir

for site in amazon newyorktimes wsj wikipedia; do
    echo "site: $site" >> $result_dir
    for delay in 5 25 50; do
        echo "  delay: $delay" >> $result_dir
        for band_width in 5 10 15; do
            echo "      bandwidth: $band_width" >> $result_dir
            #enable tcp fast open
            echo "          tfo enabled" >> $result_dir
            echo "519" > /proc/sys/net/ipv4/tcp_fastopen
            python3 tcp_fastopen.py -s $site --delay $delay -b $band_width -d $result_dir --tfo
            
            #disable tcp fast open
            echo "          tfo disabled" >> $result_dir
            echo "0" > /proc/sys/net/ipv4/tcp_fastopen
            python3 tcp_fastopen.py -s $site --delay $delay -b $band_width -d $result_dir
        done
    done
done

# #get results
# python3 parse_results.py -f $result_dir > parsed_results.txt
# #show results
# cat parsed_results.txt
