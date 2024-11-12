//^ OBJECT:
let x = new Object();
x.name = "syz";
x.id = 123;
console.log(x);

let y = {
  id: 400,
  skills: ["java", "js", "react"],
  fn: function () {
    console.log("anonymous function");
  },
  nested: {
    key: "values",
  },
};
y.fn();

console.log(y.nested["key"]);

let obj = {
  name: "moti",
  id: 25,
  skills: ["Dominating", "Mommy Personality", "Always Sleepy"],
  children: 0,
  isMarried: false,
};
Object.freeze(obj);
console.log(Object.isFrozen(obj));

Object.seal(obj);
console.log(Object.isSealed(obj));

obj.salary = 10000;
delete obj.id;
obj.name = "Laxmi Motki";
console.log(obj);
let key = Object.keys(obj);
console.log(key);
let values = Object.values(obj);
console.log(values);
let e = Object.entries(obj);
console.log(e);

//^ STATIC (); IN OBJECT [1.Object.freeze(),2.Object.seal(),3.Object.isFrozen(),4.Object.isSealed(),5.Object.Keys()]

//& 1.Object.freeze - IT WILL FREEZE THE OBJECT/WE CANNOT MODIFY THE OBJECT(I.E WE CANNOT UPDATE OR DELETE THE OBJECT)
//& 2.Object.isFrozen - IT WILL RETURN THE BOOLEAN VALUE IF FREEZE THEN IT WILL RETURN TRUE OR ELSE FALSE
//& 3.Object.Seal - SAME AS FREEZE BUT HERE WE CAN ONLY UPDATE THE VALUE
//& 4.Object.isSealed - IT WILL RETURN THE BOOLEAN VALUE IF SEALED THEN IT WILL RETURN TRUE OR ELSE FALSE

//Object.assign();
let z = {
  name: "xyz",
  id: 900,
  skills: ["java", "react"],
};

let address = {
  doorNo: 90,
  pinCode: 400601,
  location: "Jspider,Thane",
};

let y1 = {
  key: "value",
};

let newObj = Object.assign(z, address, y);
console.log(newObj);
console.log(x);
console.log(address);
console.log(y1);

let o = Object.assign({}, x);
console.log(o);

//! rest parameter and spread  operator
//! A rest parameter must be last in argument

function demo1(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
demo1(10, 20, 30, 40, 50);

let str = "javascript";
console.log(...str);

let ar = [90, 40, 30, 50];
console.log(...ar);

let a1 = [80, 30];
let b1 = [70, 50];

console.log(...a1, ...b1);
console.log([...str]);

//spread syntax requires ...iterable
//let n = 900;
// console.log(..n);
