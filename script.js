function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const computerChoice = getComputerChoice();
    const humanChoice = prompt("Enter your choice: ");
    return { computerChoice, humanChoice };
}

// Add a div for displaying results
let resultDiv = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function updateResult(message) {
    resultDiv.innerHTML = message;
}

function playRound(playerSelection) {
    const humanChoice = playerSelection.toLowerCase();
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        return { result: "tie", message: `Tie! Both chose ${humanChoice}` };
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return { result: "player", message: `You win! ${humanChoice} beats ${computerChoice}` };
    } else {
        return { result: "computer", message: `You lose! ${computerChoice} beats ${humanChoice}` };
    }
}

function handleButtonClick(event) {
    if (gameOver) return;
    const playerSelection = event.target.id;
    console.log('playerSelection:', playerSelection); // Debugging line
    const roundResult = playRound(playerSelection);
    if (roundResult.result === "player") {
        playerScore++;
    } else if (roundResult.result === "computer") {
        computerScore++;
    }
    let scoreMessage = `Score: Player ${playerScore} - Computer ${computerScore}`;
    let fullMessage = `${roundResult.message}<br>${scoreMessage}`;
    if (playerScore === 5 || computerScore === 5) {
        gameOver = true;
        if (playerScore > computerScore) {
            fullMessage += '<br><strong>You win the game!</strong>';
        } else {
            fullMessage += '<br><strong>Computer wins the game!</strong>';
        }
    }
    updateResult(fullMessage);
}

document.getElementById("rock").addEventListener("click", handleButtonClick);
document.getElementById("paper").addEventListener("click", handleButtonClick);
document.getElementById("scissors").addEventListener("click", handleButtonClick);