# Debug notes

Use code on
https://reproducingnetworkresearch.wordpress.com/2015/05/31/cs244-15-tcp-fast-open/

Reproduce Step:


```
git clone https://bitbucket.org/Gasparila/cs244-pa3.git`
cd cs244-pa3
sudo ./run.sh
```
### Problems when running on EC2

#### install mininet
Launch an EC2 with 20.04 Ubuntu, install following the instructions on http://mininet.org/download/#option-2-native-installation-from-source



```bash
git clone https://github.com/mininet/mininet
mininet/util/install.sh
```

#### ModuleNotFoundError: No module named 'termcolor'

Fix by running `sudo pip install termcolor` to install

bug details:

failed to run `sudo ./run.sh` after installing termcolor using `pip install termcolor`
```bash
Traceback (most recent call last):
  File "/home/ubuntu/cs536_lab/cs244-pa3/tcp_fastopen.py", line 18, in <module>
    import termcolor as T
ModuleNotFoundError: No module named 'termcolor'
```

If simply run `python3 tcp_fastopen.py -s amazon --delay 100 -d results.txt`  
This successfully import termcolor, but permission denied on following process

run `sudo python3 tcp_fastopen.py -s amazon --delay 100 -d results.txt`
```bash
Traceback (most recent call last):
  File "/home/ubuntu/cs536_lab/cs244-pa3/tcp_fastopen.py", line 18, in <module>
    import termcolor as T
ModuleNotFoundError: No module named 'termcolor'
```

