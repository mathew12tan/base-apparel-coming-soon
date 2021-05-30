const emailInput = document.querySelector("#email");
const emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const form = document.querySelector('form');
const submitBtn = document.querySelector(".submit-btn");

emailInput.addEventListener("click", function () {
  form.classList.remove('error');
});

emailInput.addEventListener("keypress", function () {
  form.classList.remove('error');
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (emailPattern.test(emailInput.value)) {
    alert("success");
    emailInput.value = "";
  } else {
    form.classList.add('error');
  }
});
