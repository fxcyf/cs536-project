<link href="//stanford.edu/~rawatson/markdown.css" rel="stylesheet"></link>                                                                     
# Introduction
Data sent via TCP makes up a large majority of internet traffic in 2015.  TCP
offers an easy way to establish a reliable stream of bytes between two end
hosts, abstracting away issues like congestion control and data integrity
validation.  Through a great deal of work and planning, TCP has done a great
job serving internet traffic since its introduction back in 1974.

Today, we'd like to focus in on one particular performance-related aspect of
TCP: the 3-way handshake.  Initializing a TCP connection takes 3 steps,
illustrated below:

1. Host A sends a "SYN" packet to host B, requesting a connection be
   established.
2. Host B sends a "SYN-ACK" packet to host A, acknowledging that host A wants to
   start a connection (SYN) and affirming that A can connect to B (ACK).
3. Host A sends an "ACK" packet to host B, acknowledging that B is connected to
   A.  Host A can send data starting with this "ACK" packet.

This process guarantees that TCP will never send unwanted data to an incorrect
host, or a host which isn't interested in receiving data from a client.  A
server will only ever have to process data from clients who have already
established their connection having received a "SYN-ACK" packet.

## What problem was the original paper trying to solve?
The 3-way handshake works well, and introduces only 2 packets of overhead into
a standard TCP flow.  For a flow which transmits any sizable amount of data,
this will be a fairly negligible amount of overhead.  However, consider a TCP
flow which sends only 1 packet of request and 1 packet of response in an entire
connection.  Modeling this flow yields the following result:

1. Client sends a SYN packet to server
2. Server sends a SYN-ACK packet to client
3. Client sends an ACK packet to server along with request payload
4. Server sends an ACK packet to client along with response payload

In this extreme scenario only half of the packets we transmitted contained
actual payload data, while the rest were needed just to establish the
connection!  This means that the TCP handshake hurts network latency and
throughput if a large number of short lived TCP connections are used
frequently.

The authors of this paper wanted to find a way to get around the 3-way
handshake in certain circumstances.  If the client was able to send data along
with the first SYN packet, then the server could start preparing and sending a
response much faster.  Getting this minor "head-start" wouldn't hurt
long-lasting connections, but would significantly speed up short, frequent
connections.  This system, called "TCP fast open",  is described in more detail
in the paper.

## Why is the problem important/interesting?
There's actually a well known application which often makes a large number of
small requests to a variety of different end hosts: the world wide web!  Web
clients would frequently make a large number of requests to a server (to
download a large number of images, for example).  These requests incur a
significant performance penalty, and numerous techniques have been invented to
work around this limitation (from basic things like HTTP Keep-Alive to
complicated hacks like CSS sprites).

Even with HTTP Keep-Alive this is still a problem though, since sites may
request a large number of resources from a variety of different servers.  For
example, www.foxnews.com requests data from 26 different domains, each of which
must go through a complete 3-way handshake.  The impact of this can be lessened
by keeping connections alive for longer, but neither the client nor the server
is interested in persisting connections for longer than a few seconds, and many
HTTP servers will timeout and close connections which haven't been used in the
last few seconds.  This means that a reader who opens an article, reads it for
10 seconds, then opens a new article may have to once again go through 27
complete 3-way handshakes, blocking transfer as time goes.

## What did the original authors find?
The TCP fast open system proposed in the paper had a very promosing impact on
total page load time in HTTP.  On average, websites loaded between 5-40% faster
with TCP fast open enabled than without.  Additionally, there was little CPU
cost on the server side: in fact, the server tended to use less CPU, since it
had fewer packets to process overall.

The authors also spent a fair bit of time focusing on the security implications
of TCP fast open, especially with regards to resource exhaustion attacks.  The
feasibility of resource exhaustion attacks is extremely important to the TCP
fast open system, but we're not going to focus on it in this post.

## What subset of results did you choose to reproduce?
We chose to focus on reproducing the performance results from the original
paper.  Specifically, we're interested in reproducing table 1.  We're hoping to
be able to reproduce similar resuls, but we're also interested in investigating
how much TCP fast open helps as a function of the dependency structure and
resource layout of a web page.

## Why that particular result?
The performance improvement numbers are the most impressive aspect of the TCP
fast open system, and the problems with opening TCP connections have motivated
a significant amount of work among web programmers.  Replicating the results
presented in the paper would be interesting, but it would be even more
interesting to see if TCP fast open usage would encourage web programmers to
adopt different best practices.

## Progress so far
We've been focusing on setting up a good system for evaluating the performance
of TCP fast open in mininet.  As stated in our proposal, our plan is to
download a cached copy of various web pages from a server hosted across a
mininet link.  We'll measure the time it takes to fully download the page, and
compare performance with and without TCP fast open.

There are a few factors which need to come together to get this right:
* **Network Topology:** We've finished putting together our (very basic)
  network topology in mininet, and have checked it's performance with various
  bandwidth and latency values.
* **Using TCPFO:** Enabling TCP fast open requires enabling a sysctl parameter
  in the Linux kernel.  Previous years blog posts were helpful for figuring out
  exactly what we needed to do in order to get TCP fast open working.
* **Client Side:** TCP fast open requires some minimal changes to the client
  side application in order to function.  We're planning to use `mget` as a
  client side downloading program.
* **Server Side:** We used a SimpleHttpServer (copied over from pa-1) with a
  simple change to set the socket option for TCP fast open if an appropriate
  flag is passed in.
* **Testing Script:** We currently have a testing script that generates the
  topology, starts a webserver, and has the client download pages from it. Our
  current webserver has the contents of amazon.com's front page and all of its
  assets. We chose Amazon first as it is the first result listed in table 1.
  We were able to see a definite speedup (between 3% and 21% depending on RTT)
  using TCP fast open, but our latency times are are an order of magnitude
  higher (~13s instead of 1.5s).

## Plans for the next two weeks
We're hoping to finish building out a test system for evaluating TCP
performance.  We have three specific milestones we'd like to achieve in the
next two weeks:
* **Validate basic experiments:** We want to make sure that we get things right
  when we evaluate the performance of TCP fast open.  This means going beyond
  our basic script and actually looking at the data being sent to verify that
  things are progressing as they should.  If we're lucky, we might be able to
  encode some of this validation logic into our reproducible code, though this
  may be tricky due to the differences in tools (Wireshark vs. python script).
* **Finish replicating results:** In order to replicate table 1 from the paper
  we need to test with a specific configuration of latency and bandwidth values
  while requesting specific sites.  We need to set up our testing framework to
  reproduce the table they came up with exactly.
* **Expand replicated results:** Finally, we'd like to generalize table 1 to
  better understand how TCP fast open affects performance as a function of the
  number of connections, amount of data transferred per connection, and
  sequencing of connections, if applicable.  This could help us better
  understand why the results in table 1 were so different for different
  servers.
