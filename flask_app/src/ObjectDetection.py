import cv2

def ObjectDetection(image_path):

    car_cascade = cv2.CascadeClassifier('static/xml_file/haarcascade_car.xml')


    image = cv2.imread(image_path)


    if image is not None:

        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)


        cars = car_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))


        for (x, y, w, h) in cars:
            cv2.rectangle(image, (x, y), (x+w, y+h), (255, 0, 0), 2)


        cv2.imshow('Detected Cars', image)
        cv2.waitKey(0)
        cv2.destroyAllWindows()
    else:
        print("Failed to load the image")