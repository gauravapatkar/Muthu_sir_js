//! default exports:

//* import division from "./module.mjs" --- 1.use for only importing 1 tpes of data.
//*--- 2. indetifier should't need same name.

//* console.log(division);
//* division(100, 10);

//!named exports:

import { div as division, multiply, emp } from "./module.mjs";
//~if we want to change name use "as". ....e.g-as division
console.log(emp);
multiply(10, 20);
division(900, 10);
