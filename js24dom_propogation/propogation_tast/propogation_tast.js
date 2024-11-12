let div = document.querySelector("div");
let youname = document.querySelectorAll("input")[0];
let partnername = document.querySelectorAll("input")[1];
let btn = document.querySelector("button");
let p = document.querySelector("p");

div.addEventListener("click", () => {
  div.classList.toggle("bg");
});

btn.addEventListener("click", (e) => {
  if (youname.value != "" && partnername.value != "") {
    let rn = Math.ceil(Math.random() * 100);
    p.innerHTML = `${youname.value} and
         ${partnername.value} love percentage is ${rn} `;

    console.log(rn);
  }
  e.stopPropagation();
});
