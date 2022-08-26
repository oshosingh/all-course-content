from flask import Flask
from flask_sock import Sock 
import time

app = Flask(__name__)
sock = Sock(app)

@sock.route('/logs')
def streamLogs(ws):
    while True:
        text = ws.receive()
        file = open('input.txt', 'r')

        while True:
            line = file.readline()
            ws.send(line)

            time.sleep(2)

            # line is empty or end of line
            if not line:
                break
        ws.close()


app.run('0.0.0.0', 5000)