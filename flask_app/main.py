import cv2

img = cv2.imread('assets/cars_on_road.jpeg', 1)

resizeImg = cv2.resize(img, (0, 0), fx= 0.5, fy= 0.5)

rotateImg = cv2.rotate(resizeImg, cv2.ROTATE_180)


# cv2.imwrite('assets/modified_image.jpg', rotateImg)

cv2.imshow('Image', rotateImg)

cv2.waitKey(0)
cv2.destroyAllWindows()