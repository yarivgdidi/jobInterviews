#https://leetcode.com/problems/game-of-life/
class Solution(object):
    def getOverlay(self, grid):
        overlay = []
        for i in range(self.heigth):
            overlay.append([0] * self.width)
        return overlay

    def markOverlay(self, board, overlay, i, j):
        for x in range(max(0, i-1), min(i+2, self.heigth )):
            for y in  range(max(0, j-1), min(j+2, self.width )):
                if (not(x == i and y == j)):
                     overlay[i][j] += board[x][y]

    def show(self, board, overlay, nextGen):
        for i in range(self.heigth):
            print(board[i], overlay[i], nextGen[i]),

    def getNextGen(self, board, overlay):
        nextGen = []
        for i in range(self.heigth):
            nextGen.append([])
            for j in range(self.width):
                if (board[i][j]):
                    if overlay[i][j]<2:
                        nextGen[i].append(0)
                    elif overlay[i][j] > 3:
                        nextGen[i].append(0)
                    else:
                        nextGen[i].append(1)
                else:
                    if(overlay[i][j] == 3):
                        nextGen[i].append(1)
                    else:
                        nextGen[i].append(0)
        return nextGen

    def gameOfLife(self, board):
        """
        :type board: List[List[int]]
        :rtype: None Do not return anything, modify board in-place instead.
        """
        self.heigth = len(board)
        self.width = len(board[0])
        overlay = self.getOverlay(board)
        for i in range(self.heigth):
            for j in range(self.width):
                self.markOverlay(board, overlay, i, j)
        nextGen = self.getNextGen(board, overlay)
        self.show(board, overlay, nextGen)

s = Solution()
board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
]

s.gameOfLife(board)

