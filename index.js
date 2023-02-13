let win = 0;
let lose = 0;
let draw = 0;

game();

function game() {
  win = 0;
  lose = 0;
  draw = 0;

  for (let i = 0; i < 5; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
  }

  console.log(
    `Game Over! You won ${win} times, lost ${lose} times and drew ${draw} times`,
  );
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection - computerSelection) {
    case 0:
      draw++;
      return `It's a Draw! Both played ${numToRPS(playerSelection)}`;
    case 1:
    case -2:
      win++;
      return `You win! ${numToRPS(playerSelection)} beats ${
        numToRPS(computerSelection)
      }`;
    case 2:
    case -1:
      lose++;
      return `You lose! ${numToRPS(playerSelection)} loses to ${
        numToRPS(computerSelection)
      }`;
    default:
      return `Sorry, something went wrong: ${playerSelection} ${computerSelection}`;
  }
}

function getComputerChoice() {
  // 0 is rock, 1 is paper, 2 is scissors
  return Math.floor(Math.random() * 3);
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

function numToRPS(n) {
  switch (n) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      return "";
  }
}
