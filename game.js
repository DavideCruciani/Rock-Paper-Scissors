
const RockButton = document.getElementById('RockButton');
const PaperButton = document.getElementById('PaperButton');
const ScissorsButton = document.getElementById('ScissorsButton');
const YourChoice = document.getElementById('your-choice-img');
const ComputerChoice = document.getElementById('computer-choice-img');
const Defeat = new Audio('sounds/Oof.mp3');
const Victory = new Audio('sounds/Victory.mp3');


RockButton.addEventListener('click', () => {
  playRound('rock', getComputerChoice()),
  YourChoice.setAttribute('src', 'images/rock.png');
})

PaperButton.addEventListener('click', () => {
  playRound('paper', getComputerChoice()),
  YourChoice.setAttribute('src', 'images/paper.png');
})



ScissorsButton.addEventListener('click', () => {
  playRound('scissors', getComputerChoice()),
  YourChoice.setAttribute('src', 'images/scissors.png');
})



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
  if (computerSelection === 'rock') {
    ComputerChoice.setAttribute('src', 'images/rock.png')
  } else if (computerSelection === 'paper') {
    ComputerChoice.setAttribute('src', 'images/paper.png')
  } else if (computerSelection === 'scissors') {
    ComputerChoice.setAttribute('src', 'images/scissors.png')
  }
  if (playerScore === 5) {
    document.getElementById("results").innerHTML = "You WON the Game!!!";
    Victory.play();
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    document.getElementById("results").innerHTML = "You LOST the Game!!!";
    Defeat.play();
    playerScore = 0;
    computerScore = 0;
  }
}

