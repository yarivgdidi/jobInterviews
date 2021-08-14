# https://leetcode.com/problems/bomb-enemy/
class Solution(object):
    def getOverlay(self):
        overlay = []
        for i in range(self.heigth):
            overlay.append([0] * self.width)
        return overlay

    def show(self, grid, overlay):
        for i in range(self.heigth):
            print(grid[i], overlay[i]),

    def countUp(self, grid, i, j):
        count = 0
        while (i>=0 and grid[i][j] != "W"):
            if (grid[i][j] == 'E'):
                count += 1
            i-=1

        return count

    def countDown(self, grid, i, j):
        count = 0
        while (i < self.heigth and grid[i][j] != "W"):
            if (grid[i][j] == 'E'):
                count += 1
            i += 1
        return count

    def countRight(self, grid, i, j):
        count = 0
        while (j < self.width  and grid[i][j] != "W"):
            if (grid[i][j] == 'E'):
                count += 1
            j += 1

        return count

    def countLeft(self, grid, i, j):
        count = 0
        while (j >= 0  and grid[i][j] != "W"):
            if (grid[i][j] == 'E'):
                count += 1
            j -= 1
        return count

    def maxKilledEnemies(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        self.heigth=len(grid)
        self.width=len(grid[0])
        overlay = self.getOverlay()
        max = 0
        for i in range(self.heigth):
            for j in range(self.width):
                if (grid[i][j] == '0'):
                    up = self.countUp(grid, i, j)
                    down = self.countDown(grid, i, j)
                    left=self.countLeft(grid, i, j)
                    right = self.countRight(grid, i, j)
                    kills = up + down + right + left
                    overlay[i][j] = kills
                    if kills > max:
                        max = kills
        self.show(grid, overlay)
        return max




grid=[
    ["0","E","0","0"],
    ["E","0","W","E"],
    ["0","E","0","0"]]
s=Solution()
r = s.maxKilledEnemies(grid)
print(r)