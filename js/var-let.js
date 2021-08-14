// https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var
var a = 5;
let b = 5;

function setAB() {
    a = 6
    b = 6
}

function setLet() {
    var a = 7;
    let b = 7
}

setAB();

console.log(a, b) //  6, 6
setLet();

console.log(a, b) // 6, 6

{ 
    var c=3
    let d=3
}
console.log(c) // 3
// console.log(d) // error d undefined
var funcs = [];
// let's create 3 functions
for (var i = 0; i < 3; i++) {
    // and store them in funcs
    funcs[i] = function() {
      // each should log its value.
      console.log("My value: " + i);
    };
  }
for (var j = 0; j < 3; j++) {
// and now let's run each one to see
funcs[j]();
}


for (let i = 0; i < 3; i++) {
// and store them in funcs
funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
};
}
for (let j = 0; j < 3; j++) {
// and now let's run each one to see
funcs[j]();
}

console.log(x) //undefined
var x = 5

// console.log(y) //reference error
let y=5

