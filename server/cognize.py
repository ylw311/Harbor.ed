import cv2
from deepface import DeepFace

def get_combined_emotion(emotions):
    sorted_emotions = sorted(emotions.items(), key=lambda item: item[1], reverse=True)
    dominant_emotion, dominant_value = sorted_emotions[0]
    secondary_emotion, secondary_value = sorted_emotions[1]

    # Threshold for considering secondary emotion significant
    threshold = 0.8 * dominant_value

    emotion_combinations = {
        'happy': {
            'surprise': 'Exhilarated',
            'sad': 'Bittersweet',
            'angry': 'Agitated',
            'fear': 'Nervous'
        },
        'sad': {
            'angry': 'Frustrated',
            'fear': 'Despondent',
            'happy': 'Melancholic',
            'surprise': 'Confused'
        },
        'angry': {
            'disgust': 'Outraged',
            'surprise': 'Indignant',
            'sad': 'Bitter',
            'happy': 'Sarcastic'
        },
        'surprise': {
            'happy': 'Astonished',
            'fear': 'Alarmed',
            'sad': 'Shocked',
            'angry': 'Startled'
        },
        'neutral': {
            'happy': 'Slightly Happy',
            'fear': 'Slight Feared',
            'sad': 'Slightly Sad',
            'angry': 'Slightly Angry',
            'surprised': 'Slightly Surprised'
        }
    }

    c_emotion = emotion_combinations.get(dominant_emotion, {}).get(secondary_emotion)
    if c_emotion and secondary_value > threshold:
        return c_emotion
    elif secondary_value > threshold / 10000 and secondary_emotion == 'sad':
        return secondary_emotion

    return dominant_emotion

model_used = "haarcascade_frontalface_default.xml"
# model_used = "haarcascade_frontalface_alt.xml"

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + model_used)

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
            print(analyze)
        except Exception as e:
            # cv2.putText(image, "Neutral", (100, 100), cv2.FONT_HERSHEY_SIMPLEX, 1, (224, 77, 176), 2)
            print(f'Could not find your face: {e}')

    cv2.imshow('video', frame)
    key = cv2.waitKey(1)
    if key == ord('q'):
        break

video.release()
cv2.destroyAllWindows()
