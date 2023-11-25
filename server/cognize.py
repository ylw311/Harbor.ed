import cv2
from deepface import DeepFace

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

# video = cv2.VideoCapture(0, cv2.CAP_DSHOW)
video = cv2.VideoCapture(1)

if not video.isOpened():
    raise IOError("Please make sure your webcam is open :)")

while video.isOpened():
    _, frame = video.read()

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    face = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)

    for x, y, w, h in face:
        image = cv2.rectangle(frame, (x, y), (x + w, y + h), (89, 2, 236), 1)
        try:
            # face_frame = frame[y:y + h, x:x + w]
            # analyze = DeepFace.analyze(face_frame, actions=['emotion'])
            analyze = DeepFace.analyze(frame, actions=['emotion'])[0]
            print(analyze)
            cv2.putText(image, analyze['dominant_emotion'], (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1, (224, 77, 176), 2)
            print(analyze['dominant_emotion'])
        except Exception:
            print('Could not find your face :<')

    cv2.imshow('video', frame)
    key = cv2.waitKey(1)
    if key == ord('q'):
        break

video.release()
cv2.destroyAllWindows()
