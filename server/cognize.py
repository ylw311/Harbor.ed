import cv2
import dlib
import numpy as np
from scipy.spatial import Delaunay
from deepface import DeepFace
from datetime import datetime, timedelta
from support import send_sms_message, send_email
from utils import draw_delaunay, get_combined_emotion, generate_color_gradient


settings_draw = 'dot'  # 'tri', 'dot', or 'none'
preferred_communicaation = 'none'  # 'email' or 'sms' or 'none'
quiet_model = False
emotion_counter_threshold = 30

sad_emotions = ['Sad', 'Frustrated', 'Despondent', 'Bittersweet', 'Melancholic', 'Angry', 'Outraged', 'Indignant', 'Bitter', 'Sarcastic']
emotion_counter = 0

model_used = "haarcascade_frontalface_default.xml" # or "haarcascade_frontalface_alt.xml"
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + model_used)

# initialize dlib's shape predictor
predictor_path = "config/landmarks.dat"  # Path to the dlib pre-trained model
predictor = dlib.shape_predictor(predictor_path)
detector = dlib.get_frontal_face_detector()

# video = cv2.VideoCapture(0, cv2.CAP_DSHOW)
video = cv2.VideoCapture(1)

if not video.isOpened():
    raise IOError("Please make sure your webcam is open :)")

while video.isOpened():
    _, frame = video.read()

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)

    for x, y, w, h in faces:
        image = cv2.rectangle(frame, (x, y), (x + w, y + h), (89, 2, 236), 1)

        try:
            # face_frame = frame[y:y + h, x:x + w]
            # analyze = DeepFace.analyze(face_frame, actions=['emotion'])
            analyze = DeepFace.analyze(frame, actions=['emotion'])[0]
            combined_emotion = get_combined_emotion(analyze['emotion']).capitalize()

            cv2.putText(image, combined_emotion, (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1, (224, 77, 176), 2)
            print(analyze['dominant_emotion'])

            if combined_emotion in sad_emotions:
                emotion_counter += 1
                if emotion_counter >= emotion_counter_threshold:
                    if preferred_communicaation == 'sms':
                        send_sms_message()
                    elif preferred_communicaation == 'email':
                        send_email("attachment.png")
                    emotion_counter = 0  # reset the counter after sending SMS
            else:
                emotion_counter -= 0.05  # decrease counter if the emotion is not sad or angry
        except Exception as e:
            # cv2.putText(image, "Neutral", (100, 100), cv2.FONT_HERSHEY_SIMPLEX, 1, (224, 77, 176), 2)
            print(f'Could not find your face: {e}')
            emotion_counter -= 0.01

        if settings_draw == 'tri':
            rect = dlib.rectangle(int(x), int(y), int(x + w), int(y + h))
            shape = predictor(gray, rect)
            points = np.array([[p.x, p.y] for p in shape.parts()])
            subdiv = Delaunay(points)
            triangleList = subdiv.simplices.copy()
            triangle_colors = generate_color_gradient(len(triangleList), np.array([134, 255, 162]), np.array([214, 64, 22]))
            draw_delaunay(frame, points, triangleList, triangle_colors)
        elif settings_draw == 'dot':
            dlib_rects = [dlib.rectangle(int(x), int(y), int(x + w), int(y + h)) for (x, y, w, h) in faces]
            dot_colors = generate_color_gradient(68, np.array([134, 255, 162]), np.array([214, 64, 22]))
            for rect in dlib_rects:
                shape = predictor(gray, rect)
                for i in range(0, 68):  # total 68 landmarks
                    color = tuple(map(int, dot_colors[i]))
                    cv2.circle(frame, (shape.part(i).x, shape.part(i).y), 3, color, -1)

    cv2.imshow('video', frame)

    if not quiet_model:
        key = cv2.waitKey(1)
        if key == ord('q'):
            break

video.release()
cv2.destroyAllWindows()
