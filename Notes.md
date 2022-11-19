failed to run `sudo ./run.sh` after installing termcolor using `pip install termcolor`
```
Traceback (most recent call last):
  File "/home/ubuntu/cs536_lab/cs244-pa3/tcp_fastopen.py", line 18, in <module>
    import termcolor as T
ModuleNotFoundError: No module named 'termcolor'
```

simply run `python3 tcp_fastopen.py -s amazon --delay 100 -d results.txt`
successfully import termcolor, but permission denied on following process

run `sudo python3 tcp_fastopen.py -s amazon --delay 100 -d results.txt`
```
Traceback (most recent call last):
  File "/home/ubuntu/cs536_lab/cs244-pa3/tcp_fastopen.py", line 18, in <module>
    import termcolor as T
ModuleNotFoundError: No module named 'termcolor'
```

### Successfully run the program after `sudo pip install termcolor`

