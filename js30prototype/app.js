let ar = [10, 20, 30];
console.log(ar);

let obj = {
  name: "sachin",
  id: 123,
};
console.log(obj);

let child = {
  name: "pushkar",
  age: 10,
  gender: "male",
};

let parent = {
  name: "ruthu",
  age: 21,
  wife: 0,
  kids: 2,
  height: "145cm",
  getName() {
    console.log(this.name);
  },
};
child.__proto__ = parent;

console.log(child);
console.log(child.name);
console.log(child.height);
child.getName();
