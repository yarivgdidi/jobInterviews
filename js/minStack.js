const getMinStack = function() {
    return {
        push(x) { 
            if (this.minStack.length === 0 || x <= this.peekMin()) {
                this.minStack.push(x);
            }    
            this.stack.push(x);
        },
        pop(){
            x = this.stack.pop();
            if ( x === this.peekMin()) {
                this.minStack.pop()
            }
            return x;
    
        },
        minStack: [],
        stack:[],
        peek() {return  this.stack[this.stack.length -1]},
        peekMin() {return  this.minStack[this.minStack.length -1]},
        getMin() {return this.peekMin() },
    
    }
}  
s=getMinStack()
l=getMinStack()

s.push(3)
l.push(15)
s.push(6)
l.push(117)
s.push(1)
l.push(10)
l.push(11)
s.push(4)

console.log('peek', s.peek());
console.log('getmin', s.getMin());
console.log('pop', s.pop())
console.log('pop', s.pop())
console.log('getMin', s.getMin())
console.log('pop', s.pop())
console.log('getMin', s.getMin())
console.log('L min',l.getMin()),
console.log('pop', s.pop())
console.log('getMin', s.getMin())
console.log('pop', s.pop())










