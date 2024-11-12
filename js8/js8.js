let a = () => {
  console.log("arr function");
};
console.log(typeof a);
let ar = [10, 20, 30];
console.log(typeof ar);

let num = 30;
let x = Array.isArray(ar);
console.log(x);

//! non-statric method :

//? 1-push() and unshift()

let arr = [10, "js", true, 100n, [90]];
console.log(arr.length);
let res1 = arr.push(34.56, 68, 34);

// let res2 = arr.unshift("fdc", "fwds");
console.log(res1);
// console.log(res2);
console.log(arr);

//? 2- pop() and shift()

let fruits = ["apple", "banna", "mango", "watermelon"];
// var res3 = fruits.pop();
// console.log(res3);

let res4 = fruits.shift();
console.log(res4);
console.log(fruits);

//? 3- slice()

let v = [10, 20, 30, 40, 45];
let res5 = v.slice(1, 3);
console.log(res5);
console.log(v);
console.log(v.slice(3));

//* adding two or more array (concat method) :

let r = [10, 20];
var b = [23, 56];
let c = [34, 5667];

//? concat method
let d = r.concat(c, b);
console.log(r);
console.log(d);

let t = [34, 667, 34, 78, 23, 6789, 34];
// delete t[1]
console.log(t.length);

//! splice method
// let v = [10, 20, 30, 40, 45];
let res7 = v.splice(1, 3, "java", "js");
console.log(res7);
console.log(v);

//^ index of:

const arr2 = [10, 39, 543, 76, , 23, "java", "js", "node", 456, 2356];
console.log(arr2.indexOf(76, 2));
