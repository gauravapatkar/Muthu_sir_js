// ?destructuring
//! 1object   2.array

let ar = [10, 20, 30, 40, 60, 90];
// console.log(ar[1])

const [a, b, ...f] = ar;
console.log(a, b);

console.log(f);

let obj = {
  name: "gaurav",
  id: 78,
  skill: ["java", "js", "pythron", "node"],
  designation: null,
  ismarried: true,
  children: 5,
};
let id = 89;
var { designation, id: eid, ...x } = obj;
console.log(designation);
console.log(id);
console.log(eid);
console.log(x);
