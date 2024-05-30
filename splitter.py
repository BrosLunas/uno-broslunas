import cv2
colors = ['red', 'yellow', 'green', 'blue']
img = cv2.imread('deck.png')
w = 3362//14
h = 2882//8
index = 0
for r in range(0,img.shape[0],h):
  for c in range(0,img.shape[1],w):
    name = f'{colors[int(c/w)%4]}{int(index%14)}'
    name = str(index)
    cv2.imwrite(f"{name}.png",img[r:r+h, c:c+w,:])
    index += 1

'''
w = 50
h = 75
img = cv2.imread('cards.png')
for r in range(0,img.shape[0],h):
    for c in range(0,img.shape[1],w):
        cv2.imwrite(f"img{r}_{c}.png",img[r:r+h, c:c+w,:])
'''