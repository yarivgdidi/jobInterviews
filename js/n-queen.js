/**
 * @param {number} n
 * @return {string[][]}
 */
// const solveNQueens = n => {
//     const boards = []
//     for (let i = 0; i < n**n-1; i++ ) {
//         const board = boardArray(i,n)
//         if(checkBoard(board)) {
//             boards.push(toStr(board))
//         }
//     }
//     return boards
// }
const solveNQueens = n =>
    [...new Array( n**n -1)]
        .map((_, i) => i)
        .filter(i => checkBoard(boardArray(i,n)))
        .map(board => boardArray(board,n))
        .map(board => toStr(board))

const toStr = board =>
    board.map(line => Array(line)
        .fill('.').concat(['Q']).concat(Array(board.length - 1 - line).fill('.')) )
        .map(line => line.join(''))

const boardArray = (n, base) =>  {
    const board = n.toString(base).split('');
    return new Array(base - board.length).fill(0).concat(board).map(x=>x*1)
}

const checkBoard = board =>  (checkDiagonal(board) && checkVertical(board)) || board.length ===1

const checkVertical = board => ([...new Set(board)].length === board.length)

const checkDiagonal = board => board.reduce( (acc, _, i) => {
    board.forEach((_,j) => {
        if (i !== j && (board[i] - board[j] === i - j || board[i] - board[j]  === j - i))
            acc = false
    })
    return acc;
},true)

const start = Date.now()
console.log(solveNQueens(1))
const time = Date.now() - start
console.log(time)