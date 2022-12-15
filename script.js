function getComputerChoice() {
  const choiceSet = ["rock", "paper", "scissors"];
  const randomNumb = Math.floor(Math.random() * 3);
  return choiceSet[randomNumb];
}

function playRound(playerSelection, computerSelection) {
  // your code here!

  // Player: rock
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "Draw!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Win!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Lose!";

    // Player: paper
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Win!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Lose!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "Draw!";
  }

  //Palyer: scissors
  else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Lose!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "Draw!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Win!";
  }
}

// const playerSelection = "paper";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

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
