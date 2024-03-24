import cv2
import numpy as np

def ObjectDetection(img):
    car_cascade = cv2.CascadeClassifier('static/xml_file/haarcascade_car.xml')

    if img is not None:
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        cars = car_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        for (x, y, w, h) in cars:
            cv2.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 2)

        return img
    else:
        print("Failed to load the image")
        return None