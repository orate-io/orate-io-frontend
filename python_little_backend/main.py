from sys import argv
from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from os import system

users = {}


class HeartBeatHandler(BaseHTTPRequestHandler):
    def _set_response(self, code):
        self.send_response(code)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()

    def do_GET(self):
        self._set_response(404)
        self.wfile.write("NOT FOUND".encode('utf-8'))

    def do_POST(self):
        path = self.path
        if path == "/login" and path == "/signup":
            self._set_response(404)
            self.wfile.write("NOT FOUND".encode('utf-8'))
            return
        content_length = int(self.headers['Content-Length'])  # <--- Gets the size of data
        post_data = self.rfile.read(content_length).decode('utf-8')  # <--- Gets the data itself
        # print("{}\n".format(post_data.decode('utf-8')))
        print(path, post_data)
        try:
            data_dict = json.loads(post_data)
            if path == "/signup":
                users[data_dict["username"]] = data_dict["password"]
                self._set_response(200)
                self.wfile.write("OK".encode('utf-8'))
                print("Current Users:", users)
                with open("users.json", 'w') as file:
                    json.dump(users, file)
            else:
                if data_dict["username"] in users and users[data_dict["username"]] == data_dict["password"]:
                    self._set_response(200)
                    self.wfile.write("OK".encode('utf-8'))
                else:
                    self._set_response(400)
                    self.wfile.write("Username and Password Unmatch".encode('utf-8'))

        except:
            self._set_response(400)
            self.wfile.write("Bad Request".encode('utf-8'))


def run(port, server_class=HTTPServer, handler_class=HeartBeatHandler):
    server_address = ("", port)

    httpd = server_class(server_address, handler_class)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("""
###########################
#         STOPPING        #
###########################        
        """)
        pass
    httpd.server_close()
    with open("users.json", 'w') as file:
        json.dump(users, file)

if __name__ == '__main__':

    port_arg = 3001
    if len(argv) == 2:
        port_arg = int(argv[1])

    print("Port is {}" .format(port_arg))
    try:
        with open("users.json") as file:
            users = json.load(file)
    except FileNotFoundError:
        users = {"Sky": "123456"}
    print("Previous Users:", users)
    run(port=int(port_arg))

