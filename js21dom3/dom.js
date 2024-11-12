let objarry = [
  { name: "gaurav", mobileNo: 7219799703 },
  { name: "anna", mobileNo: 2324632467 },
  { name: "levi", mobileNo: 1234567897 },
  { name: "itachi", mobileNo: 1234565689 },
];

let table = document.querySelector("table");

// ?1st way

objarry.map((e) => {
  let row = document.createElement("tr");
  table.appendChild(row);
  let data = document.createElement("td");
  row.appendChild(data);
  let data2 = document.createElement("td");
  row.appendChild(data2);

  data.innerHTML = e.name;
  data2.innerHTML = e.mobileNo;
});

// ?3st way
objarry.map((e) => {
  table.innerHTML =
    table.innerHTML + `<tr> <td>${e.name}</td>  <td>${e.mobileNo}</td> </tr>`;
});

// ?2st way
objarry.map((e) => {
  table.innerHTML += `<tr> <td>${e.name}</td>
    <td>${e.mobileNo}</td> </tr>`;
});
