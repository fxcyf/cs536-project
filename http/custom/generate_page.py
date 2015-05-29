#!/usr/bin/env python
from __future__ import print_function


from subprocess import Popen, PIPE
from time import sleep, time
from multiprocessing import Process
from argparse import ArgumentParser

import termcolor

import sys, re, os, math, json, shutil

parser = ArgumentParser(description="TFO tests")

parser.add_argument('--page_padding', '-p',
                    type=int,
                    help="Size in bytes of the padding to put on the main page",
                    required=True)

parser.add_argument('--resources', '-r',
                    type=int,
                    help="Number of resources to download",
                    required=True)


parser.add_argument('--resource_size', '-s',
                    type=int,
                    help="Size in bytes of each resource",
                    required=True)

# Expt parameters
args = parser.parse_args()


directory = 'site_p{0}_r{1}_s{2}'.format(args.page_padding, args.resources, args.resource_size)
if os.path.exists(directory):
  shutil.rmtree(directory)
os.mkdir(directory)

page = '''
<html>
<head>
  <title>CS244 TCP Fast Open Test Page
</head>
<body>
'''
for i in range(args.resources):
  page += '<img src="'
  page += './img_{0}.jpg'.format(i)
  page += '"></img>\n'
  with open(directory + '/img_{0}.jpg'.format(i), 'w+') as f:
    print('a' * args.resource_size, file = f)

page += '</body></html>'
print(page)

f = open(directory + '/index.html', 'w+')
print(page, file=f)
f.close()


