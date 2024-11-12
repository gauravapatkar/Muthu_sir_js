//! array HOF  - high order function

let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//?find():

let arg1 = function (v, i, ar) {
  console.log(v, i, ar);
  return v > 25;
};

let res1 = arr.find(arg1);
console.log(res1);

let res2 = arr.find((v, i, ar) => v > 70);
console.log(res2);

//?findindex():

let res3 = arr.findIndex((v, i, ar) => {
  return v > 30;
});
console.log(res3);

let res4 = arr.findIndex((v) => 80);
console.log(res4);

//?filter()

let a1 = [40, 50, 67, 4, 85, 23, 12];
let res5 = a1.filter((v, i, ar) => {
  return v > 20;
});
console.log(res5);
console.log(a1);

//?map()

let res6 = a1.map((v, i, ar) => {
  return v + 10;
});
console.log(res6);
console.log(a1);

//? some and every():

let v = [56, 34, 46, 13, 78, 46, 35];
let r1 = v.some((v, i) => {
  console.log(v);
  return v > 70;
});

console.log(r1);

let r2 = v.every((v, i) => {
  return v > 14;
});

console.log(r2);

//?forEach():
let res7 = v.forEach((v, i, ar) => {
  console.log(v);
  console.log(i);
  console.log(ar);
});

console.log(res7);
let i = 0;
while (i < v.length) {
  console.log(v[i]);
  i++;
}

do {
  console.log(v[i]);
  i++;
} while (i < v.length);
