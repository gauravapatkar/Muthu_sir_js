let form = document.getElementsByClassName("form-control")[0];
let username = document.getElementById("username");
let password = document.getElementById("password");

form.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    const userRes = username.ariaValueMax;
    const passRes = password.ariaValueMax;
    console.log(userRes, passRes);
  },
  { capture: false }
);
