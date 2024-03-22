import cv2 
from matplotlib import pyplot as plt

img = cv2.imread('assets/highway.jpg')

img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
img_rbg = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

stop_data = cv2.CascadeClassifier('xml_file/haarcascade_car.xml')

found = stop_data.detectMultiScale(img_gray, minSize =(20, 20))

amount_found = len(found)

if amount_found != 0:
    for (x, y, width, height) in found:
        cv2.rectangle(img_rbg, (x, y), (x + height, y + width), (0, 0, 255), 5)

plt.subplot(1, 1, 1)
plt.imshow(img_rbg)
plt.show()