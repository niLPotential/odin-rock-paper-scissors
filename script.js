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
