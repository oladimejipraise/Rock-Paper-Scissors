let playerScore = 0;
let computerScore = 0;

// DOM elements
const resultDisplay = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const winnerDisplay = document.getElementById("winner");
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  if (playerScore >= 5 || computerScore >= 5) return; // Prevent playing after game over

  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    resultDisplay.textContent = `It's a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    resultDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    resultDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  // Update score display
  scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  // Check for winner
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      winnerDisplay.textContent = "🎉 Congratulations! You won the game!";
    } else {
      winnerDisplay.textContent = "💻 The computer won the game. Better luck next time!";
    }

    // Optional: disable buttons after game ends
    buttons.forEach(btn => btn.disabled = true);
  }
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
