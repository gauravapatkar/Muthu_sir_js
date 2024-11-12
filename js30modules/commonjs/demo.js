let sum = (a, b) => {
  console.log(a + b);
};

let sub = (a, b) => {
  if (a > b) console.log(a - b);
  else console.log(b - a);
};

let ar = [10, true, null, { name: "xyz" }];

module.exports = {
  sum,
  sub,
  ar,
};
