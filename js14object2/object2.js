let s1 = {
  name: `G`,
  id: 123,
  degree: "BE",
  stream: "civil",
  skill: ["react", "node", "js", "java"],
  ismarried: false,
  children: null,
  percentage: 90.99,
  id: 300,
};

// // for (let v of s1){
// //     console.log(v)
// // }
// // s1 is not iterable

// s1.address = {
//   doorno: 302,
//   location: "thane west",
//   pincode: 421101,
// };
// s1["salary"] = undefined;
// // satisfies.children = s;
// s1["ismarried"] = true;

// delete s1.id;
// delete ["salary"];
// console.log(s1);
// console.log(s1.skill);
// s1["skills"].forEach((v, i) => {
//   console.log(v);
// });
// console.log(s1.doorno);

// let x = 100;
// function demo() {
//   var x = 300;
//   console.log(x);
//   console.log(this.x);
// }
// demo();

let y = 100;
class emp {
  constructor(name, id) {
    this.ename = name;
    this.eid = id;
  }
}

let e1 = new emp("gaurav patkar", 21);
console.log(e1);

function student(name, id) {
  this.sname = name;

  this.sid = id;
}

let s6 = new student("xyz", 70);
console.log(s6);
