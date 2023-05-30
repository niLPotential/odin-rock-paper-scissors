let win = 0;
let lose = 0;
let draw = 0;

const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.onclick = () => {
    display.textContent = playRound(
      getPlayerChoice(button.id),
      getComputerChoice(),
    );
    if (win >= 5 || lose >= 5) {
      gameover();
    }
  };
});

function gameover() {
  display.textContent =
    `Game Over! You won ${win} times, lost ${lose} times and drew ${draw} times`;
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

function getPlayerChoice(input) {
  switch (input.toLowerCase()) {
    case "rock":
      return 0;
    case "paper":
      return 1;
    case "scissors":
      return 2;
    default:
      display.textContent = "Enter a valid input";
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
