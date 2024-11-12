export let multiply = function (a, b) {
  console.log(a * b);
};

export let div = function (a, b) {
  if (a > b) console.log(a / b);
  else console.log(b / a);
};

export let emp = {
  name: "gaurav",
  id: 21,
  skills: ["js", "java", "node"],
};

//*export default div;     for exporting only 1 data.
