console.log(y);
// console.log(z)
// cannot access 'z' before initialization
let x = 20;
var y = 30;
const z = 40;
console.log(x, y, z);

demo();
function demo() {
  let x = 50;
  console.log("demo function");
  console.log(x);
  function f1() {
    var x = 90;
    console.log(x);
  }
  f1();
}

//^ window object

console.log(window);
// window.alert("alert message");
console.log(this);
console.log(window === this);

// let  b=80;
var b = 80;
function f2() {
  var b = 90;
  console.log(b);
  console.log(this.b);
}
f2();
