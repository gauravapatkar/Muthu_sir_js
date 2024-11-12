let emp = {
  name: "Gaurav",
  id: 23,
  designation: CompositionEvent,
  salary: 25000,
};

function demo(a, b) {
  console.log("start");
  console.log(this);
  console.log(a, b);
}

// //?call()
// demo.call(emp, 20, 30);

// //?apply()
// demo.apply(emp, [20, 30]);

//?bind()
let fn = demo.bind(emp);
console.log(fn);
fn(24, 50);

let newobj = {
  name: "ABC",
  getname() {
    console.log(this.name);
  },
};

let res = newobj.getname.bind(emp);
res();
