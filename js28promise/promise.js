let p = new Promise(function (res, rej) {
  let proposeres = true;
  if (proposeres) res("resolved promise 1");
  else rej("rejected promise 1");
});

p.then((d) => {
  console.log(d);
  console.log("resolved");
})
  .catch((e) => {
    console.log(e);
    console.log("rejected");
  })
  .finally(() => {
    console.log("it will execute if promise is resolved or rejected");
  });
console.log(p);
