console.log(10 == 10);
console.log(10 != 11);

console.log(200 == "200");
console.log(200 === "200");

console.log(20 > 30);
console.log(20 > 10);

console.log(20 >= 20);

let sum = 10;
sum = sum + 30;
sum += 30;
sum -= 5;
sum *= 3;
sum /= 2;
console.log(sum);

let i = 1;
console.log(++i);

let num = 10;
num % 2 === 0 ? console.log("even") : console.log("odd");

//!ARRAY :

//? heterogenous array :

const ar = [10, 20, true, () => 10, ["str", "js"]];
console.log(ar.length);

//? homogenous array :
let fruit = ["apple", "mango", "chiku"];

let a = [
  10,
  "js",
  true,
  () => "arr",
  { name: "gaurav" },
  [10, 20, 30],
  undefined,
  null,
  10n,
];

console.log(a.length);
a[9] = "react";
a[15] = "node";
console.log(a[4]);
console.log(a[3]());

a[2] = false;

delete a[7];
console.log(a);
console.log(a[7]);

//! literal way:

let x = [10, 20, 30, 40, ["sreif", "js"]];
console.log(x[4][1]);

//?using array constructure:

const arr = new Array(12, 23, 4, 577);
//arr[0]=12
arr[1] = 20;
console.log(arr);

//!array.of()

let g = Array.of("strinh", true, 1n);
console.log(g);

let c = new Array(5, 10);
console.log(c);

let v = Array.of(18);
console.log(v);

console.log(Array.of("foo", 2, "bar", true));
// Expected
