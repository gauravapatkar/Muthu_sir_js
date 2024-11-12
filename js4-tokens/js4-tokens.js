let $ = 200;
var _ = 900;

console.log($);
console.log(_);

//! an identifier or keyword cannot
//! immediately follow a numeric literatered

// let 1a=100; //error

// let typeof=100 ;  //error

//! output methods in js;-

console.log("javascript");

document.write(" web technology" + "dfghj");
document.writeln(" web technology  dfghff");
document.writeln(" wefnhfvrfgg");

//!confirm

let res = confirm("dgjsdkjgbj");
console.log(res);

//? prompt:

let age = prompt("enter your age");
console.log(age);
console.log(typeof age);

//!type casting:-
//? implicit:- we don't have to manually convert the datatyp

let x = "10";
let y = 20;
let z = x + y;
//!no. datatype is converted into string datatype.
console.log(z);

//! string is converted into number datatype.
console.log(100 - "30");
console.log(true + false); // 1
console.log(null + null); // 0
console.log(null + undefined); //Nan

//? explicit:- we have to manually convert the datatype by using following method.

//~ parsenInt method - convert string into intrgar no.
let a = "3245.67546";
let b = "234.675";
let num = parseInt(a);
console.log(num);
console.log(typeof num);

console.log(parseInt(b));

//~ parsenfloat method - convert string into flating no. i.e.- decimal
console.log(parseFloat(b));
