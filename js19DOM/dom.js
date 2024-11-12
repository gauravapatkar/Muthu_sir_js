// let head = document.getElementsByTagName("h1");
// console.log(head[0]);

// let head1 = document.getElementsByTagName("p")[1];
// console.log(head1);

// let head2 = document.getElementsByTagName("a");
// console.log(head2[1]);

// let uchiha = document.getElementsByClassName("levi");
// console.log(uchiha);

// let head = document.querySelectorAll("h1");
// let cclass = document.querySelectorAll(".ind")[1];
// console.log(head, cclass);

// let id = document.getElementById("g");
// console.log(id);

let anyelement = document.querySelector("#bye");
console.log(anyelement);

let space = (anyElement.innerHTML = "i am from js");

let head = document.querySelector("h1");
head.innerHTML = "i am header from js";

let para = document.querySelectorAll("p")[1];
para.innerHTML = "i am para from js";

let head3 = document.querySelector("h1");
head3.innerHTML = `i am header from <span>js</span>`;

let head4 = document.querySelectorAll("h1")[1];
head4.innerText = "<p>i am also from js </p> ";

let anchor = document.querySelector("a");
anchor.href = "";

let input = document.getElementsByTagName("input")[0];
input.type = "password";

let img = document.querySelector(
  "img"
  // img.alt
);
