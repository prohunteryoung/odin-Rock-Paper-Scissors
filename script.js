const result = document.querySelector(".result");
const userScoreText = document.getElementById("userScore");
const computerScoreText = document.getElementById("computerScore");
const finalWinner = document.getElementById("winnerIs");

const rBtn = document.querySelector(".rockBtn");
const pBtn = document.querySelector(".paperBtn");
const sBtn = document.querySelector(".scissorsBtn");

rBtn.addEventListener("click", playRoundRock);
pBtn.addEventListener("click", playRoundPaper);
sBtn.addEventListener("click", playRoundScissors);

function getComputerChoice() {
  const choiceSet = ["rock", "paper", "scissors"];
  const randomNumb = Math.floor(Math.random() * 3);
  return choiceSet[randomNumb];
}

let winMsg = "";
let loseMsg = "";
let drawMsg = "";

let userWinScore = 0;
let computerWinScore = 0;

let active = true;

function playRoundRock(active) {
  if (active) {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();

    winMsg = `You Win! ${playerSelection} beats ${computerSelection} 💙`;
    loseMsg = `You Lose! ${computerSelection} beats ${playerSelection} ❌`;
    drawMsg = `Draw! ${computerSelection} draws ${playerSelection} 🟢`;

    // Player: rock
    if (playerSelection === "rock" && computerSelection === "rock") {
      result.textContent = drawMsg;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      result.textContent = winMsg;
      userWinScore++;
      userScoreText.innerText = userWinScore;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      result.textContent = loseMsg;
      computerWinScore++;
      computerScoreText.innerText = computerWinScore;
    }
    judge();
  } else return;
}

function playRoundPaper(active) {
  if (active) {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();

    winMsg = `You Win! ${playerSelection} beats ${computerSelection} 💙`;
    loseMsg = `You Lose! ${computerSelection} beats ${playerSelection} ❌`;
    drawMsg = `Draw! ${computerSelection} draws ${playerSelection} 🟢`;

    // Player: paper
    if (playerSelection === "paper" && computerSelection === "rock") {
      result.textContent = winMsg;
      userWinScore++;
      userScoreText.innerText = userWinScore;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      result.textContent = loseMsg;
      computerWinScore++;
      computerScoreText.innerText = computerWinScore;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
      result.textContent = drawMsg;
    }
    judge();
  } else if (!active) return;
}

function playRoundScissors(active) {
  if (active) {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();

    winMsg = `You Win! ${playerSelection} beats ${computerSelection} 💙`;
    loseMsg = `You Lose! ${computerSelection} beats ${playerSelection} ❌`;
    drawMsg = `Draw! ${computerSelection} draws ${playerSelection} 🟢`;

    // Player: scissors
    if (playerSelection === "scissors" && computerSelection === "rock") {
      result.textContent = loseMsg;
      computerWinScore++;
      computerScoreText.innerText = computerWinScore;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "scissors"
    ) {
      result.textContent = drawMsg;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      result.textContent = winMsg;
      userWinScore++;
      userScoreText.innerText = userWinScore;
    }
    judge();
  } else if (!active) return;
}

function judge() {
  if (userWinScore === 5) {
    finalWinner.innerText = "User Finally win ! 🥳";
    userWinScore = 0;
    computerWinScore = 0;
    userScoreText.innerText = userWinScore;
    computerScoreText.innerText = computerWinScore;
  } else if (computerWinScore === 5) {
    finalWinner.innerText = "Computer win 🥲";
    userWinScore = 0;
    computerWinScore = 0;
    userScoreText.innerText = userWinScore;
    computerScoreText.innerText = computerWinScore;
  }
}

/*
function game() {
  let player = 0;
  let computer = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, Scissors!").toLowerCase();
    const computerSelection = getComputerChoice();

    const play = playRound(playerSelection, computerSelection);
    if (play === "Win!") player++;
    else if (play === "Lose!") computer++;
  }
  if (player > computer) {
    console.log("Player Win!🤭");
    console.log(player);
    console.log(computer);
  } else if (player < computer) {
    console.log("Computer Win!🥲");
    console.log(player);
    console.log(computer);
  }
}

game();
*/
