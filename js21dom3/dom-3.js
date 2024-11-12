let head1 = document.getElementsByTagName("h1");
let head2 = document.querySelectorAll("h2");
let section = document.querySelector("section");
console.log(head1, head2);

//! HTMLCollection(4) [h1, h1, h1, h1] = it is live .....value change real time...it is update
//! NodeList(4) [h2, h2, h2, h2] = it is static as well as live...it values not update.

let newh1 = document.createElement("h1");
let newh2 = document.createElement("h2");

section.append(newh1, newh2);
console.log(head1, head2);

head2.forEach((e) => {
  console.log(e);
});

// head1.forEach((e) => {
//   console.log(e);
// });

let converthead1 = array.from(head1);
let converthead2 = array.from(head2);
console.log(converthead1);
console.log(converthead2);
