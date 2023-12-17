let arr = ["Rock", "Paper", "Scissors"];
const btn = document.querySelector(".btn");
let playerPoints = 0;
let computerPoints = 0;
let rounds = 1;

function play() {
  while (rounds <= 5) {
    console.log(`Round: ${rounds}`);
    console.log(`Points: Player:${playerPoints} Computer:${computerPoints}`);
    game();
    rounds++;
  }
  btn.disabled = true;
  score();
}

function getComputerChoice() {
  let computerChoice = arr[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function playerSelection() {
  let input = prompt(
    'What do you chose ? Enter 1:Rock, 2:Paper" or 3:Scissors.'
  );
  let playerChoice = arr[input - 1];
  if (playerChoice === undefined) {
    return "Error. You did not enter a valid number.";
  }
  return playerChoice;
}

function playRound(playerChoice, computerChoice) {
  console.log(`Computer choice: ${computerChoice}`);
  console.log(`Player choice: ${playerChoice}`);
  if (playerChoice === computerChoice) {
    return "tie";
  }
  switch (playerChoice) {
    case "rock":
      if (computerChoice === "paper") {
        computerPoints++;
        return "computer wins";
      }
      if (computerChoice === "scissors") {
        playerPoints++;
        return "player wins";
      }
      break;
    case "paper":
      if (computerChoice === "scissors") {
        computerPoints++;
        return "computer wins";
      }
      if (computerChoice === "rock") {
        playerPoints++;
        return "player wins";
      }
      break;
    case "scissors":
      if (computerChoice === "paper") {
        playerPoints++;
        return "player wins";
      }
      if (computerChoice === "rock") {
        computerPoints++;
        return "computer wins";
      }
      break;
  }
}

function game() {
  const playerChoice = playerSelection();
  const computerChoice = getComputerChoice();
  console.log(
    playRound(playerChoice.toLowerCase(), computerChoice.toLowerCase())
  );
}

function score() {
  console.log("Who won ?");
  console.info(
    "Player score: " + playerPoints,
    "Computer score: " + computerPoints
  );
  if (playerPoints === computerPoints) {
    console.log("ITS A DRAW");
  } else {
    console.log(
      playerPoints > computerPoints ? "Player won." : "Computer won."
    );
  }
}
