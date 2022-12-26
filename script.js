function getComputerChoice() {
  // 0 is rock, 1 is paper, 2 is scissors
  return Math.floor(randomNumber = Math.random() * 3);
}

function getPlayerChoice() {
  let input = prompt("Rock, Paper, Scissors!");
  switch (input.toLowerCase()) {
    case "rock":
      return 0;
    case "paper":
      return 1;
    case "scissors":
      return 2;
    default:
      console.log("Enter a valid input");
      return getPlayerChoice();
  }
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection - computerSelection) {
    case 0:
      return `It's a Draw! Both played ${playerSelection}`;
    case 1:
    case -2:
      return `You win! ${playerSelection} beats ${computerSelection}`;
    case 2:
    case -1:
      return `You lose! ${playerSelection} loses to ${computerSelection}`;
    default:
      return `Sorry, something went wrong: ${playerSelection} ${computerSelection}`;
  }
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));
