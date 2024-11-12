//! HOF and CAllback Function
function HOF(demo, n) {
  let a = 10;
  let b = 20;
  console.log(a, b);
  demo();
  5;
  console.log(n);
}
HOF(() => console.log("call back function"));

let sum = (a, b) => a + b;
let sub = (a, b) => a - b;

let ar = (sum, sub) => {
  console.log(sum(10, 20));
  console.log(sub(400, 300));
};
ar(sum, sub);

//!nested function:
var z = 100;
function outer() {
  console.log("start");
  let v = 100;
  let c = 200;
  console.log(v, c);
  let arr = () => {
    console.log("nested function");
  };
  console.log("end");
  //arr()
  return arr;
}

//let res = outer();
// res();
outer()();

//!closure

function f1() {
  let y = 200;
  function f2() {
    let x = 90;
    console.log(y);
    console.log(x);
  }
  f2();
}
f1();

//---------------------------------------------------------------------------------------------------------------------------------------

//!IIFE (Immediate invoke function Expression)
//* to avoid global pollution - [varibles are not stored  permanentally .  
//*  once the function gets executed it is removed]
let a = 200;
(function () {
  console.log("IIFE start");
  let a = 10;
  console.log("end");
})();

(function () {
  let a = 400;
  console.log(a);
})();

console.log(10 + 20);
console.log(10 + "20");
console.log(10 - "5");
console.log(10 * "str");
console.log("10" / 2);
console.log(51 / 10);
console.log(104 % 5);
