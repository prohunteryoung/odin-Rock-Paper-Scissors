function getComputerChoice() {
  const choiceSet = ["rock", "paper", "scissors"];
  const randomNumb = Math.floor(Math.random() * 3);
  return choiceSet[randomNumb];
}

let winMsg = "";
let loseMsg = "";
let drawMsg = "";

function playRound(player) {
  const playerSelection = prompt("Rock, Paper, Scissors!", "rock");
  const computerSelection = getComputerChoice();

  winMsg = `You Win! ${playerSelection} beats ${computerSelection} 💙`;
  loseMsg = `You Lose! ${computerSelection} beats ${playerSelection} ❌`;
  drawMsg = `Draw! ${computerSelection} draws ${playerSelection} 🟢`;

  // Player: rock
  if (playerSelection === "rock" && computerSelection === "rock") {
    return drawMsg;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return winMsg;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return loseMsg;

    // Player: paper
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return winMsg;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return loseMsg;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return drawMsg;
  }

  //Palyer: scissors
  else if (playerSelection === "scissors" && computerSelection === "rock") {
    return loseMsg;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return drawMsg;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return winMsg;
  }
}

function game() {
  let userWin = 0;
  let computerWin = 0;
  let draw = 0;
  for (let i = 1; i <= 5; i++) {
    const play = playRound();
    if (play === winMsg) userWin++;
    else if (play === loseMsg) computerWin++;
    else draw++;
  }
  console.log(userWin, computerWin, draw);
  console.log(
    userWin > computerWin ? "User Finally win ! 🥳" : "Computer win 🥲"
  );
}
game();

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
