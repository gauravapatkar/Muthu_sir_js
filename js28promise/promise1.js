let data = window.fetch("./data.json");
data
  .then((d) => {
    let res = d.json();
    console.log(res);
    res.then(
      (v) => {
        let div = document.querySelector(".container");
        v.map((val, index) => {
          let { name, id, ismarried } = val;
          div.innerHTML += `<h2> name : ${name}</h2>
    <p> id : ${id}</p>
    <h3> marital status : ${ismarried ? "married" : "unmarried"} </h3>`;
        });
      },
      (e) => e
    );
  })

  .catch((e) => {
    console.log(e);
  });
