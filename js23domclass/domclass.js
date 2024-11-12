// let h1 = document.querySelector("h1");

// console.log(h1.classList);

// h1.classList.add("thala", "csk");
// h1.classList.remove("msd");
// h1.classList.replace("csk", "mi");
// h1.classList.contains("thala"); //?it check if there is something or not......gives boolen value in return.
// h1.classList.toggle("india"); //?if class name is thier then its remove or if class name not is thier then its add.
// h1.classList.toggle("thala"); //?if class name is not thier then its remove or if class name  is thier then its add.

// console.log(h1.classList.contains("thala"));

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   h1.classList.toggle("msd");
// });

let btn2 = document.querySelectorAll("button")[1];
let img = document.querySelector("img");

btn2.addEventListener("click", () => {
  img.classList.toggle("hide");
  if (btn2.innerHTML == "show") {
    btn2.innerHTML = "hide";
  } else {
    btn2.innerHTML = "show";
  }
});

btn2.addEventListener("click");
