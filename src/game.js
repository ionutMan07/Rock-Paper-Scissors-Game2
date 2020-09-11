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
    } 
     else if (
      (computer === "Paper" && user === "Rock") ||
      (computer === "Rock" && user === "Scissors") ||
      (computer === "Scissors" && user === "Paper")  
    ) {
      result = "Computer wins";
      computerScore +=1;
    } else {
      result = "User wins";
      userScore +=1;
    }
    if (userScore === 5){
      alert('Yeeey User was first to reach 5 points, you win!!!');
    }
    else if( computerScore ===5){
      alert('Computer reached 5 points, You Lose!');
    }
    
    document.getElementById("computer-choice").innerText = computer;
    document.querySelector("#result").innerText = result;
    document.getElementById("computer-score").innerText = computerScore;
    document.getElementById("player-score").innerText = userScore;
    // show the hidden element
    document.querySelector("div").style.display = "block";
    
  }
    // ##################   Reset the Game    ##########################

   var resetGame = function(event){
     userScore = 0;
     computerScore = 0; 
     document.querySelector("div").style.display = "none";
     document.getElementById("myForm").reset();
     
   }

   // ############# Check if the user input is correct  ###############

  var checkInput = function(event){
    var actions = ["Scissors", "Paper", "Rock"];
    var user = document.querySelector("#user-choice").value;
    user = user[0].toUpperCase() + user.substring(1).toLowerCase(); //match UpperCase & LowerCase for user input
    if (actions.includes(user)) {
       return playGame();
      }
      else {
        console.log(user);
        return alert ('Check your spelling, pleasee!');
      }
  }
  var playBtn = document.getElementById("play");
  playBtn.addEventListener("click", checkInput);
  
  var resetBtn = document.getElementById("reset");
  resetBtn.addEventListener("click", resetGame);
  