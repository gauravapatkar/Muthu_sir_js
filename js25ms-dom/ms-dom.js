// console.log(document);
// console.dir(document);

let gp = document.querySelector(".gp");
let p = document.querySelector(".p");
let c = document.querySelector(".c");

document.addEventListener(
  "click",
  (e) => {
    console.log("document clicked");
  },
  false
);

gp.addEventListener(
  "click",
  (e) => {
    e.stopPropagation;
    console.log("gp clicked");
    e.composedPath;
  },
  false
);

p.addEventListener(
  "click",
  (e) => {
    console.log("parent clicked");
  },
  false
);
c.addEventListener(
  "click",
  (e) => {
    console.log("child clicked");
  },
  false
);
