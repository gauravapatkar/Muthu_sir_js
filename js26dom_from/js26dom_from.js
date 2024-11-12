let form = document.querySelector(".form-control");
let percentage = document.getElementById("percentage");

// percentage.addEventListener("change",(e)=> {
//     let display.perc = document.querySelector(".display_perc")
//     display.perc.innerHTML=percentage.value
// })

//7
let skills = document.getElementsByName("courses");
let skillsRes = [];
percentage.addEventListener("input", (e) => {
  let display_perc = document.querySelector(".display_perc");
  display_perc.innerHTML = percentage.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  let finaldata = Object.fromEntries(data);
  g;
  Array.from(skills).map((v) => {
    if (v.checked && skillsRes.includes(v.value) == false) {
      skillsRes.push(v.value);
    }
  });

  finaldata.courses = skillsRes;
  console.log(finaldata);
});
