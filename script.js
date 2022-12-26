function getComputerChoice() {
  const randomNumber = Math.random() * 3;

  if (randomNumber < 1) {
    return "Rock";
  } else if (randomNumber < 2) {
    return "Paper";
  } else if (randomNumber < 3) {
    return "Scissors";
  }
}

function getPlayerChoice() {
  let input = prompt("Rock, Paper, Scissors!");
  switch (input.toLowerCase()) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissors":
      return "Scissors";
    default:
      console.log("Enter a valid input");
      return getPlayerChoice();
  }
}

function playRound(playerSelection, computerSelection) {
}
