let head1 = document.getElementsByTagName("h1")[0];
let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   head1.innerHTML = "Leader";
// });

//?AND
btn.addEventListener("click", () => {
  //? click , dbclick , mou...
  if (head1.innerHTML == "ms dhoni") {
    head1.innerHTML = "Leader";
  } else {
    head1.innerHTML = "ms dhoni";
  }
});
