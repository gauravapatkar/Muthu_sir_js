let arr = [10, 20, 30, 40, 50];

//? reduce :
let res1 = arr.reduce((acc, cv) => {
  console.log(acc, cv);
  return acc + cv;
});
console.log(res1);

//? reduceRight :
let res2 = arr.reduceRight((acc, cv) => {
  console.log(acc, cv);
  return acc + cv;
}, 5);
console.log(res2);

//? sort() , sort follow ASC II VALUES
let a = ["mango", "bannana", "apple", "orange"];
a.sort();
console.log(a);

let numAr = [10, 9, 1000, 251, 68, 70];
numAr.sort((a, b) => {
  return a - b;
});
console.log(numAr);

//? reverse():
let c = [20, 30, 10, 60, 90];
c.reverse();
console.log(c);

//?flat()

const v = [10, [30, ["str", "js"], 40], 50];
let r1 = v.flat();
let r2 = r1.flat();
console.log(r2);

let r3 = v.flat(2);
console.log(r3);

let r4 = r3.includes(10, 2);
console.log(r4);

let ar = [
  20,
  "hellow world",
  90,
  [10, 30],
  true,
  null,
  100n,
  () => {},
  undefined,
  false,
];

//?FILL METHOD
ar.fill("str", 4, 7);
console.log(ar);

let arr5 = [10, 40, 20, 60, 90];

//? ways to iterate the arrays :-
for (let v of arr5) {
  console.log(v);
}

for (let i in arr5) {
  console.log(i, arr[i]);
}

let k = arr5.keys();
console.log(k);
for (let key of k) {
  console.log(key);
}

let g = arr5.values();
console.log(g);
for (let values of g) {
  console.log(values);
}

let e = arr5.entries();
console.log(e);

for (let entry of e) {
  console.log(entry);
}

let ar2 = [100, "str", 20n, true, false, undefined, null];
let r6 = ar2.lastIndexOf("str", 4);
console.log(r6);
