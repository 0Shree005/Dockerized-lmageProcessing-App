from flask import Flask, send_file
from ObjectDetection import ObjectDetection
import cv2
import io

app = Flask(__name__)

@app.route('/')
def detect_cars():

    img = ObjectDetection('static/highway.jpg') 


    is_success, buffer = cv2.imencode(".jpeg", img)


    io_buf = io.BytesIO(buffer)


    return send_file(io_buf, mimetype='image/jpeg')

if __name__ == '__main__':
    app.run(debug=True)