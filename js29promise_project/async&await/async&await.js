//?date=09/08/24 part 3

// let p1 = Promise.resolve("resolve promise");

// let demo = async () => {
//   console.log("start");
//   await p1;
//   let a = 10;
//   console.log(a);
//   console.log("str");
//   console.log("end");
// };

// demo();
// console.log("h1");
// console.log("h1");
// console.log("h1");
// console.log("h1");

let fetchdata = async () => {
  try {
    let data = await window.fetch("https://fakestoreapi.com/products");
    let finaldata = await data.json();
    console.log(finaldata);
  } catch (error) {
    console.log("error");
  }
};

fetchdata();
