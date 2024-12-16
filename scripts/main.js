window.onload = loadFunction;

function loadFunction() {
  var dumyBg = document.getElementById("initial-section");
  var bookingForm = document.getElementById("booking-form");
  var ball = document.getElementById("ball");
  var thankyouMsg = document.getElementById("thankyou-msg");
  dumyBg.addEventListener("animationend", function () {
    this.style.display = "none";
  });
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    this.style.display = "none";
    ball.classList.add("active");
  });
  ball.addEventListener("animationend", function () {
    thankyouMsg.style.display = "block";
  });
}
