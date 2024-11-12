let div = document.querySelector("div");
let para = document.querySelector("p");
let h2 = document.querySelector("h2");

let h1 = document.createElement("h1");
let anchor = document.createElement("a");
let span = document.createElement("span");

h1.innerHTML = " i am h1";
anchor.innerHTML = " i am anchor";
span.innerHTML = " i am span";

//!note - append = last position . prepend = first position , insertbefore = between position
div.prepend(h1);
div.insertBefore(anchor, para);
div.append(para);

//!only for child
// div.removeChild(para);
// div.removeChild(h1);

//! for  entire element
div.remove();
