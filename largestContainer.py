# https://leetcode.com/problems/container-with-most-water/

def getConteinerHeight(a, b):
    return min(a,b)

def getContainerWidth(i,j):
    return j-i

def getArea(i,j,a,b):
    return getConteinerHeight(a,b) * getContainerWidth(i,j)

def getMaxArea():
    A = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    max = 0
    max_i = 0
    max_j = 0
    for i in range(len(A)-1):
        for j in range(i+1, len(A)):
            area = getArea(i,j,A[i],A[j])
            if (area > max):
                max = area
                max_i = i
                max_j = j

    print(max, max_i, max_j)

getMaxArea()


def maxAreaOptimal():
    A = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    left = 0
    right = len(A) - 1
    maxArea = 0
    while (left < right):
        maxArea = max(maxArea, (right - left) * min(A[right], A[left]))
        if (A[right] > A[left]):
            left += 1
        else:
            right -= 1
    print(maxArea)

maxAreaOptimal()