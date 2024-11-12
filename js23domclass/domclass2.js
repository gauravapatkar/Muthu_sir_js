let input = document.querySelector("input");
let eye = document.querySelector(".fa-eye");
let eyeslash = document.querySelector(".fa-eye-slash");

eye.addEventListener("click", () => {
  input.type = "text";
  eye.classList.toggle("hide");
  eyeslash.classList.toggle("hide");
});

eyeslash.addEventListener("click", () => {
  input.type = "password";
  eyeslash.classList.toggle("hide");
  eye.classList.toggle("hide");
});
