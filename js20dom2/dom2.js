// let head = document.getElementsByTagName("h1")[0];
// let title = document.getElementsByTagName("title")[0];

// console.log(title);
// console.log(title.innerHTML);
// setInterval(() => {
//   if (title.innerHTML == "Document") {
//     title.innerHTML = "DOM";
//   } else {
//     title.innerHTML = "Document";
//   }
// }, 1000);

// console.log(head.innerHTML);
// setInterval(() => {
//   if (head.innerHTML == "ms dhoni") {
//     head.innerHTML = "leader";
//   } else {
//     head.innerHTML = "ms dhoni";
//   }
// }, 1000);

let division = document.getElementsByClassName("demo")[0];
console.log(division);

let head2 = document.createElement("h1");
division.appendChild(head2);
head2.innerHTML = " created";

let para = document.querySelectorAll("p")[0];

let span = document.createElement("span");
head2.innerHTML = " i am span";
division.appendChild(head2);

let head3 = document.createElement("h2");
division.appendChild(head3);
head3.innerHTML = " i also created";

let head4 = document.createElement("a");
head3.appendChild(head4);
head4.innerHTML = " anchor";
head4.href = "https://www.facebook.com/";
head4.target = "_blank";

let div2 = document.getElementById("div2");

let img = document.createElement("img");
img.alt = " i am img but i am not having picture";

let para2 = document.createElement("p");
para2.innerText = "i am para 2";

div2.append(img, para2, "hello i am string");
