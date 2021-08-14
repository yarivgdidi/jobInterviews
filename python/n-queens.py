# https://leetcode.com/problems/n-queens/
class Solution(object):
    def solveNqueens(self, n):
        i = 0
        boards = []
        styledBoards = []
        while i < self.getIterationsCount(n):
            board = self.dec2Base(i, n)
            if self.checkBoard(board):
                boards.append(board)
                self.printBoard(self.styleBoard(board))
                styledBoards.append(self.styleBoard(board))
                print()
            i += 1
        return styledBoards

    def printBoard(self, styledBoard):
        for line in styledBoard:
            print(line)

    def styleBoard(self, board):
        res = []
        i = 0
        while i < len(board):
            line = '.' * board[i]
            line += 'Q'
            line += '.' * (len(board) - 1 - board[i])
            res.append(line)
            i += 1
        return res

    def dec2Base(self, n, base):
        result = []
        dividir = n
        while dividir:
            quetetion = dividir // base
            remainder = dividir % base
            result.append(remainder)
            dividir = quetetion
        padding = [0] * (base - len(result))
        return padding + result

    def getIterationsCount(self, n):
        count = 0
        i = 0
        while i < n:
            count += n * i ** 10
            i += 1
        return count

    def checkBoard(self, board):
        return self.checkVertical(board) and self.checkDiagonal(board) #and self.checkReverseDiagonal(board)

    def checkVertical(self, board):
        return len(board) == len(set(board))

    def checkDiagonal(self, board):
        valid = True
        for i, valI in enumerate(board):
            for j, valJ in enumerate(board):
                if i != j and (valI - valJ == i - j or valI - valJ == j - i):
                    valid = False
        return valid

    def checkReverseDiagonal(self, board):
        valid = True
        for i, valI in enumerate(board):
            for j, valJ in enumerate(board):
                if i != j and valI - valJ == j - i:
                    valid = False
        return valid


s = Solution()
print(s.solveNqueens(1))
