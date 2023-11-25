import cv2


def draw_delaunay(frame, points, triangleList, delaunay_color):
    for t in triangleList:
        pt1 = tuple(points[t[0]])
        pt2 = tuple(points[t[1]])
        pt3 = tuple(points[t[2]])
        cv2.line(frame, pt1, pt2, delaunay_color, 1, cv2.LINE_AA, 0)
        cv2.line(frame, pt2, pt3, delaunay_color, 1, cv2.LINE_AA, 0)
        cv2.line(frame, pt3, pt1, delaunay_color, 1, cv2.LINE_AA, 0)
