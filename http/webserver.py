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
    httpd.socket.setsockopt(socket.SOL_TCP, 23, 5) 
print("Server1: httpd serving at port {}".format(PORT))
httpd.serve_forever()
