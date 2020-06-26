class Solution(object):

    def getOverlay(self, grid):
        overlay = []
        for i in range(self.heigth):
            overlay.append([0] * self.width)
        return overlay

    def mark(self, grid, overlay, i, j ,count):
        if (grid [i][j] == 1 and overlay[i][j] == 0):
            overlay[i][j] = count
            if (i+1 < self.heigth):
                self.mark(grid, overlay, i+1, j, count)
            if (j+1 < self.width):
                self.mark(grid, overlay, i, j + 1, count)

    def show(self, grid):
        for i in range(self.heigth):
            print(grid[i]),


    def numIsland(self, grid):
        self.heigth = len(grid)
        self.width = len(grid[0])
        overlay = self.getOverlay(grid)
        i = 0
        j = 0
        count = 0
        for i in range (self.heigth):
            for j in range(self.width):
                if (grid[i][j] == 1 and overlay[i][j] == 0):
                    count += 1
                    self.mark(grid, overlay, i, j, count)
        return count


x=Solution()
grid=[
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,0]
]

grid2 = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1]
]
x.numIsland(grid)
print()
x.numIsland(grid2)


