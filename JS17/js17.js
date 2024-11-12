//!setTimeOut() & SetInterval()

let fn = (a, b, c) => {
  console.log(a, b, c);
  // console.log("setTimeout function");
};
fn();

let st1 = window.setTimeout(fn, 4000, 200, "str", true);
console.log(st1);

let userloggedin = true;
if (userloggedin == false) {
  clearTimeout(st1);
}
console.log("hellow");

let b = 400;
console.log(b + 100);

let st2 = window.setInterval(function () {
  console.log("setinterval function");
  document.write("Namskar" + "<br>");
}, 1000);
console.log(st2);

setTimeout(() => {
  clearInterval(st2);
}, 5000);

let obj = {
  fn: () => {
    console.log(obj);
  },
  nf: function () {
    console.log("anno fn");
  },
  named: function demo() {
    console.log("demo fn");
  },
  f1() {
    console.log("direct function");
  },
};

obj.fn();
obj.nf();
obj.named();
obj.f1();

("use strict");
// console.log(this);

function demo() {
  console.log(this);
}
demo();
class emp {
  constructor(name, id) {
    this.enmae = name;
    this.eid = id;
  }
}

let el = new emp("gp", 23);

let obj1 = {
  name: "xyz",
  demo: function () {
    console.log(this.name);
  },
  ar: () => {
    console.log(this);
  },
};
obj1.demo();
obj1.ar();

let d1 = function () {
  console.log(this);
  let arr = () => {
    console.log(this);
  };
  arr();
};
d1();
