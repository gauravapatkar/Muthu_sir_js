//! local storage:

// console.log(window.localStorage);
// console.log(window.sessionStorage);

localStorage.setItem("name", "sachin");
localStorage.setItem("id", 10);
localStorage.setItem("skilkl", ["js", "react", "node"]);

let n = localStorage.getItem("name");
console.log(n);

console.log(parseInt(localStorage.getItem("id")));
let skills = localStorage.getItem("slills");
console.log(skills.split(","));

localStorage.removeItem("id");
localStorage.clear();

//!session Storage:

sessionStorage.setItem("name", "sachin");
sessionStorage.setItem("id", 10);
sessionStorage.setItem("skilkl", ["js", "react", "node"]);

let n1 = sessionStorage.getItem("name");
console.log(n1);

console.log(parseInt(sessionStorage.getItem("id")));
let skills1 = sessionStorage.getItem("slills");
console.log(skills1.split(","));

sessionStorage.removeItem("id");
sessionStorage.clear();
