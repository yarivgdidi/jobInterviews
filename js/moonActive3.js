function solution(A, B) {
    let max = Math.round((A+B)/4);
    while (max > 0) {
        if (Math.floor(A/max) + Math.floor(B/max) >=4) {
            return max
        }
        max -= 1
    }
    return 0

}
let A=0
let B=0
console.log('A:', A, 'B:', B, solution(A,B) )

A=13
B=11
console.log('A:', A, 'B:', B, solution(A,B) )

A=2
B=1
console.log('A:', A, 'B:', B, solution(A,B) )

A=8
B=1
console.log('A:', A, 'B:', B, solution(A,B) )