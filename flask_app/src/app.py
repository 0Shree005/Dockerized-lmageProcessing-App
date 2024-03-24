from flask import Flask, send_file, request
from ObjectDetection import ObjectDetection
import cv2
import io
import numpy as np
import base64
from flask_cors import CORS
from flask import jsonify

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def detect_cars():
    file = request.files['image']
    npimg = np.fromfile(file, np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    img = ObjectDetection(img) 

    is_success, buffer = cv2.imencode(".jpeg", img)
    img_str = "data:image/jpeg;base64," + base64.b64encode(buffer).decode()

    return jsonify({'image': img_str})

if __name__ == '__main__':
    app.run(debug=True)