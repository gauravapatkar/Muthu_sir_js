"use strict";

// //!local scope:

// let x = 10;
// var y = 20;
// const z = 30;

// console.log(x);
// console.log(y);
// console.log(z);

// function demo(x, y) {
//   let a = 10;
//   var b = 20;
//   const c = 30;
//   console.log(a, b, c);
//   return c - b;
// }

// demo(100, 200);

// {
//   let p = "str";
//   const q = "js";
//   var r = "java";
//   console.log(p); //!block scope
// }

// console.log(r);

// // console.log(q); //!block scope

//?example for use strict
m = "python";
console.log(m);

//?uncaught syntaxerror:duplicate
//!parameter name not allowed in this

function f1(a, b, b) {
  console.log(a + b + b);
}
