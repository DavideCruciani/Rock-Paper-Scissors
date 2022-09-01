
const RockButton = document.createElement('button')
const PaperButton = document.createElement('button')
const ScissorsButton = document.createElement('button')
const Results = document.createElement('div')
const Points = document.createElement('div')
Results.setAttribute('id', 'results')
Points.setAttribute('id', 'points')


RockButton.addEventListener('click', () => {
  playRound('rock', getComputerChoice())
})

PaperButton.addEventListener('click', () => {
  playRound('paper', getComputerChoice())
})



ScissorsButton.addEventListener('click', () => {
  playRound('scissors', getComputerChoice())
})



document.body.appendChild(RockButton)
document.body.appendChild(PaperButton)
document.body.appendChild(ScissorsButton)
document.body.appendChild(Results)
document.body.appendChild(Points)




const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    document.getElementById("results").innerHTML = "Tie! Repeat";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    document.getElementById("results").innerHTML = "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    document.getElementById("results").innerHTML = "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    document.getElementById("results").innerHTML = "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    document.getElementById("results").innerHTML = "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    document.getElementById("results").innerHTML = "You Win! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    document.getElementById("results").innerHTML = "You Lose! Rock beats Scissors";
  } else {
    document.getElementById("results").innerHTML = "Choose between Rock, Paper and Scissors!!";
  }
  document.getElementById('points').innerHTML = `${playerScore} at ${computerScore}`;
  if (playerScore === 5) {
    document.getElementById("results").innerHTML = "You WON the Game!!!";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    document.getElementById("results").innerHTML = "You LOST the Game!!!";
    playerScore = 0;
    computerScore = 0;
  }
}

