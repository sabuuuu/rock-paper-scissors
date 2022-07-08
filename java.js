const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //comparing the hands
            compareHands(this.textContent, computerChoice);
            //Updateîng the images
            playerHand.src = `pics/${this.textContent}.png`;
            computerHand.src = `pics/${computerChoice}.png`;
          },);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "it is a tie :(,try again";
        return;
      }
      //Checking for Rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "good job you won !";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "oh no the computer won..";
          cScore++;
          updateScore();
          return;
        }
      }
      //Checking for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "oh no the computer won..";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "good job you won !";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "oh no the computer won..";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "good job you won !";
          pScore++;
          updateScore();
          return;
        }
      }
    };
  
    //call the inner functions
    startGame();
    playMatch();
};
function disableButtons() {
    playBtn.forEach(elmnt => {
        elmnt.disabled = true;
    });
  }
  
  //start the game function
game();