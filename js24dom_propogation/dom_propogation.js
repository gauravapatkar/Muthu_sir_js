let div = document.querySelector("div");
let btn = document.querySelector("button");
let anchor = document.querySelector("a");
let body = document.querySelector("body");

div.addEventListener(
  "click",
  () => {
    //   div.style.backgroundColor = "yellow";
    div.classList.toggle("bg");
    console.log("div");
    // e.stopPropagation();
  },
  false
);

btn.addEventListener(
  "click",
  (e) => {
    console.log("button");
    console.log(e);
    e.stopPropagation();
  },
  false
);

body.addEventListener(
  "click",
  (e) => {
    console.log("body");
    e.stopPropagation();
  },
  true
);
