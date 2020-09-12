var calculate = function (event) {
  var firstNumber = Number(document.querySelector("#firstNumber").value);
  var secondNumber = parseFloat(document.querySelector("#secondNumber").value);
  var operation = document.querySelector("#operation").value;
  var rezultat;

  if (operation === "add") {
    rezultat = firstNumber + secondNumber;
  } else if (operation === "sub") {
    rezultat = firstNumber - secondNumber;
  } else if (operation === "multiply") {
    rezultat = firstNumber * secondNumber;
  } else if (operation === "divide") {
    rezultat = firstNumber * secondNumber;
  }
  document.querySelector("#rezultat").innerText = rezultat;
};

var reset = function (event) {
  var noValue = " ";
  document.getElementById("myForm2").reset();
  document.querySelector("#rezultat").innerText = noValue;
};

var playBtn = document.getElementById("Calculate");
playBtn.addEventListener("click", calculate);

var resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", reset);
