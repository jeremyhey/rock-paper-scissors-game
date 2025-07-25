console.log("Hello World");

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

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    function playRound() {
        const humanChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
        const computerChoice = getComputerChoice();
        if (humanChoice === computerChoice) {
            console.log(`Tie! Both chose ${humanChoice}`);
            return "tie";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return "player";
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return "computer";
        }
    }

    for (let i = 0; i < 5; i++) {
        const result = playRound();
        if (result === "player") {
            playerScore++;
        } else if (result === "computer") {
            computerScore++;
        }
        console.log(`Score after round ${i + 1}: Player ${playerScore} - Computer ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

// Uncomment the line below to play the game when the script runs
playGame();