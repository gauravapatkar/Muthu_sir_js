//?reverse the string

let str = " I am gaurav";
let r = "";
for (let i = str.length - 1; i > 0; i--) {
  r = r + str[i];
}
console.log(r);

let str1 = "my name is gaurav";

let res = str1.split("").reverse("").join("");
let res1 = str1.split("").reverse().join("");

console.log(res);
console.log(res1);

let p1 = "patkar";
let p2 = p1.split("").reduceRight((acc, cv) => acc + cv, "");
console.log(p2);

//? convert string into array
let str3 = "gaurav";
let g = "";
for (let i = 0; i < str3.length; i++) {
  g = g + str3[i];
}

let arr = Array.from(g);
console.log(arr);

let y = "hellow world";
let r10 = y.split(" ");
console.log(r10);

let str4 = "india";
console.log([...str4]);

let str5 = " is great";
console.log([...str4, ...str5]);
console.log(...str4, ...str5);

//?random

let s = Math.random() * (100 - 9) + 10;
let p = Math.trunc(s);
console.log(p);
