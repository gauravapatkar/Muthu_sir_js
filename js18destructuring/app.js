let o = {
  name: "xys",
  id: 300,
  skill: ["js", "react"],
};

let str = JSON.stringify(o);
console.log(str);
console.log(typeof str);

let p = JSON.parse(str);
console.log(p);
