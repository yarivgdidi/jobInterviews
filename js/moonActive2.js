function solution(S) {
    const Stack = []
    const A=S.split(' ')
    try {
      A.forEach(op => {
            let x, a, b
            switch (op) {
                case 'POP':
                    x = Stack.pop();
                    break;
                case 'DUP':
                    x = Stack.pop();
                    Stack.push(x)
                    Stack.push(x)
                    break;
                case '+':
                    a = Stack.pop();
                    b = Stack.pop();
                    if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
                        throw new Error('Stack Error')
                    }
                    Stack.push(a + b);
                    break;
                case '-':
                    a = Stack.pop();
                    b = Stack.pop();
                    if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
                        throw new Error('Stack Error')
                    }
                    Stack.push(a - b);
                    break;
                default:
                    x = parseInt(op)
                    if (!isNaN(x)) {
                        Stack.push(x)
                    }
            }
        })
    } catch (e) {
        return e.message
    }
    return Stack.pop()
}

console.log(solution('4 5 6 - 7 +'))
console.log(solution('13 DUP 4 POP 5 DUP + DUP + -'))
console.log(solution('5 6 + -'))
console.log(solution('5 6 + - 1 1 1'))
console.log(solution('3 DUP 5 - -'))
