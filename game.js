const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Tie! Repeat")
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    console.log("You Lose! Paper beats Rock")
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    console.log("You Win! Rock beats Scissors")
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    console.log("You Win! Paper beats Rock")
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    console.log("You Lose! Scissors beats Paper")
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    console.log("You Win! Scissors beats Paper")
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    console.log("You Lose! Rock beats Scissors")
  } else {
    console.log("Choose between Rock, Paper and Scissors!!")
  }
}

function game() {
  for (let i = 1; i <= 1000; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors? write your choice!").toLowerCase()
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection);
    console.log(`${playerScore} at ${computerScore}`)
    if (playerScore === 5) {
      console.log("You WON the game!!!")
      break;
    } else if (computerScore === 5) {
      console.log("You LOST the game!!!")
      break;
    }
}
}


console.log(game())