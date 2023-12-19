let arr = ["rock", "paper", "scissors"];

// selectors
const btn = document.querySelector(".play-btn");
const btnsContainer = document.querySelector(".btns-container");
const playerScore = document.querySelector(".player-score-text");
const computerScore = document.querySelector(".computer-score-text");
const playingButtons = document.querySelectorAll(".image");
const round = document.querySelector(".round");

// game features
let maxRounds = 6;
let actualRound = 1;

let playerPoints = 0;
let computerPoints = 0;

// init values
playerScore.textContent = 0;
computerScore.textContent = 0;

function play() {
  console.log(actualRound + " " + maxRounds);
  btn.style.visibility = "hidden";
  btnsContainer.classList.add("show-btns");
  // btn.appendChild(round);

  // make the buttons fire a round with a choice
  playingButtons.forEach((playBtn) =>
    playBtn.addEventListener("click", function (e) {
      playRound(e.target.id);
    })
  );
}

function getComputerChoice() {
  let computerChoice = arr[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function checkScore() {
  let winner = "";
  let tie = "No one wins !";

  if (playerPoints === computerPoints) {
    return tie;
  }
  if (playerPoints > computerPoints) {
    winner = "player";
  }
  if (computerPoints > playerPoints) {
    winner = "computer";
  }
  let h1 = `${winner} wins !`;
  return h1;
}

function addPoints(playerChoice, computerChoice) {
  console.log(playerChoice + " " + computerChoice);
  if (playerChoice === computerChoice) {
    playerPoints++;
    computerPoints++;
    return;
  }
  if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      computerPoints++;
    } else {
      playerPoints++;
    }

    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        computerPoints++;
      } else {
        playerPoints++;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        playerPoints++;
      } else {
        computerPoints++;
      }
    }
  }
}

function playRound(choice) {
  // setting the values
  round.textContent = actualRound;

  // computer choice
  let computerChoice = getComputerChoice();
  // check the result and add points
  addPoints(choice, computerChoice);
  playerScore.textContent = playerPoints;
  computerScore.textContent = computerPoints;

  actualRound++;
  if (actualRound >= maxRounds) {
    checkScore();
    gameOver();
  }
}

function gameOver() {
  btn.style.visibility = "hidden";
  btnsContainer.classList.remove("show-btns");

  btn.style.visibility = "visible";
  const winner = checkScore();

  const elem = document.createElement("h1");
  elem.style.textAlign = "center";
  elem.textContent = winner;
  btnsContainer.parentNode.parentNode.appendChild(elem);
  btn.addEventListener("click", restart);
}

function restart() {
  location.reload();
}
