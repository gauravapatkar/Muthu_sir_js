let emp = {
  name: "gadge",
  id: 1311,
  designation: "developer",
  salary: 500000,
};

function demo(a, b) {
  console.log("Start");
  console.log(this);
  console.log(a, b);
}

demo.call(emp, 20, 30);
// will take one  and multiple arguments object reference and arguments
demo.apply(emp, [20, 30]);
// will take two arguments object reference and argument array
let fn = demo.bind(emp); //  bind method will return the bound function
fn(20, 30);

let newObj = {
  name: "Pranjal",
  getName() {
    console.log(this.name);
  },
};

let res = newObj.getName.bind(emp);
res();

//! why primitive datatypes are immutable and non-primitive datatypes are mutable.

//^ METHODS [1.CALL(),2.APPLY(),3.BIND()] - IT IS USED TO SET THE VALUES FOR THIS KEYWORD INSIDE THE FUNCTION(NAMED FUNCTION)
// let emp = {
//   name: "sachin",
//   id: 300,
//   designation: "Manager",
//   salary: 200,
// };
// function demo(a, b) {
//   console.log("start");
//   console.log(this);
//   console.log(a, b);
//   //!INSIDE FUNCTION THIS KEYWORD REFERS TO WINDOW OBJECT ALWAYS
// }
// demo.call(emp, 20, 30); //emp - object reference //it will take one or multiple argument
// demo.apply(emp, [20, 30]); //emp - object reference //It will take 2nd argument as array

//*CALL AND APPLY WILL SET THE VALUES AND EXECUTE THE METHODS ALSO BUT THE BIND METHOD WILL ONLY SET THE VALUES IT WILL NOT EXECUTE THE MEHTOD

// let fn = demo.bind(emp); //*it will return the bound function which is nothing but the obj ref value
// // console.log(fn);
// fn(); //*To execute the function we need to call the function

// let newObj = {
//   name: "xyz",
//   getName() {
//     console.log(this.name);
//   },
// };

// newObj.getName();
// let res = newObj.getName.bind(emp);
// res();

//! WHY PRIMITIVE DATATYPE ARE IMMUTABLE AND NON PRIMITIVE DATATYPE ARE MUTABLE
//*MUTABLE MEANS WE CAN ABLE CHANGE THE DATA
//*PRIMITIVE DATATYPE ARE IMMUTABLE BECAUSE IT WILL CHANGE THE VALUE INSIDE ANOTHER OBJECT,IT  not CHANGE INSIDE THE SAME OBJECT
//*NON PRIMITIVE DATATYPE ARE MUTABLE BECAUSE WE CAN CHANGE THE VALUE INSIDE THE SAME OBJECT

console.log([] == []);
console.log({} == {});
let s = { name: "syx" };
let v = { name: "syx" };
console.log(v == s);

//!IN PRIMITIVE DATATYPE IR WILL COMPARE THE VALUE
//!IN NON PRIMITIVE DATATYPE IT WILL COMPARE THE ADDRESS

//! SHALLOW COPY:
//~ By Copying the Object reference(i.e: obj)
let address = {
  location: "JSPThane",
  pinCode: 400601,
};
let obj = {
  name: "Abc",
  id: 80,
  skiils: ["js", "java", "react"],
  salary: 69000,
  isMarried: false,
  kids: 2,
  add: address,
};
// obj.id = 68;
address.location = "QSPThane";
// console.log(obj);
// let copiedObj = obj;
// console.log(copiedObj);
// console.log(copiedObj == obj);

//~ Object.assign(): IT IS USED TO MERGE TWO OR MORE OBJECT
// let copiedObj2 = Object.assign({}, obj);
// obj.skiils = ["SQL"];
// console.log(copiedObj2);
// console.log(copiedObj2 == obj);

//^ using object destructureing

let copiedObj3 = { ...obj };
obj.skills = ["SQL"];
console.log(copiedObj3);

//* using for in loop

let copiedObj4 = {};
for (let key in obj) {
  copiedObj4[key] = obj[key];
}

obj.skiils = ["SQL"];
console.log(copiedObj4);

//^ deep copy
//- JSON.stringify() and JSON.parse()

let ad = {
  pinCode: 400601,
  location: "JSPThane",
};

let obj1 = {
  name: "Abc",
  id: 80,
  skiils: ["js", "java", "react"],
  salary: 69000,
  isMarried: false,
  kids: 2,
};

let str = JSON.stringify(obj1);
let copiedObj5 = JSON.parse(str);
ad.location = "QSpidersThane";
console.log(copiedObj5 === obj1);
console.log(copiedObj5);

//! StructuredClone
let copiedObj6 = structuredClone(obj1);
console.log(copiedObj6 == obj1);
obj.id = 500;
ad.location = "QSpidersThane";
console.log(copiedObj6);
