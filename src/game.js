var getRandomInt = function (max) {
    return Math.floor(Math.random() * max);
  };
  var userScore = 0;
  var computerScore = 0;
  
  var playGame = function (event) {
    var actions = ["Scissors", "Paper", "Rock"];
    var computer = actions[getRandomInt(3)];
  
    var user = document.querySelector("#user-choice").value;
  
    var result = "";
  
    if (computer === user) {
      result = "It's a Tie";
    } else if (
      (computer === "Paper" && user === "Rock") ||
      (computer === "Rock" && user === "Scissors") ||
      (computer === "Scissors" && user === "Paper")
    ) {
      result = "Computer wins";
    } else {
      result = "User wins";
    }
    document.getElementById("computer-choice").innerText = computer;
    document.querySelector("#result").innerText = result;
    // show the hidden element
    document.querySelector("div").style.display = "block";
   
  };
  
  var playBtn = document.getElementById("play");
  playBtn.addEventListener("click", playGame);
  
  console.log(playBtn);
  