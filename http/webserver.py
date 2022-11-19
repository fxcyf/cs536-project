from http import server
import socketserver 
import socket
from argparse import ArgumentParser

parser = ArgumentParser(description="TFO tests")
parser.add_argument('--tfo', '-t',
                    help="set TCP Fast Open enabled",
                    action="store_true") 

# Expt parameters
args = parser.parse_args()

class CustomHandler(server.SimpleHTTPRequestHandler):

    
    # Disable logging DNS lookups
    def address_string(self):
        return str(self.client_address[0])


PORT = 80
Handler = CustomHandler
httpd = socketserver.TCPServer(("", PORT), Handler)
if (args.tfo):
    print('TCP Fast Open enabled')
    #no idea why I need the value 5 or what it is, but below blog recommends it
    #23 is TCP_FAST_OPEN which for some reason doesn't exist in 
    #my version of python. 
    #See http://edsiper.linuxchile.cl/blog/2013/02/21/linux-tcp-fastopen-in-your-sockets/
    httpd.socket.setsockopt(socket.SOL_TCP, 23, 5) 
print("Server1: httpd serving at port {}".format(PORT))
httpd.serve_forever()
