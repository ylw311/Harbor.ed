import cv2


def draw_delaunay(frame, points, triangleList, delaunay_color):
    for t in triangleList:
        pt1 = tuple(points[t[0]])
        pt2 = tuple(points[t[1]])
        pt3 = tuple(points[t[2]])
        cv2.line(frame, pt1, pt2, delaunay_color, 1, cv2.LINE_AA, 0)
        cv2.line(frame, pt2, pt3, delaunay_color, 1, cv2.LINE_AA, 0)
        cv2.line(frame, pt3, pt1, delaunay_color, 1, cv2.LINE_AA, 0)


def get_combined_emotion(emotions):
    sorted_emotions = sorted(emotions.items(), key=lambda item: item[1], reverse=True)
    dominant_emotion, dominant_value = sorted_emotions[0]
    secondary_emotion, secondary_value = sorted_emotions[1]

    # threshold for considering secondary emotion significant
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
    elif secondary_value > threshold / 100 and secondary_emotion == 'sad':
        return secondary_emotion

    return dominant_emotion

