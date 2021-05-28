const emailInput = document.querySelector("#email");
const emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const emailDiv = document.querySelector(".email-div");
const errorImg = document.querySelector(".error-img");
const errorMsg = document.querySelector(".error-msg");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (emailPattern.test(emailInput.value)) {
    alert("success");
    emailDiv.classList.remove("email-div-error");
    errorImg.classList.remove("error-img-show");
    errorMsg.classList.remove("error-msg-show");
    submitBtn.classList.remove("submit-btn-error");
    emailInput.value = "";
  } else {
    emailDiv.classList.add("email-div-error");
    errorImg.classList.add("error-img-show");
    errorMsg.classList.add("error-msg-show");
    submitBtn.classList.add("submit-btn-error");
  }
});
