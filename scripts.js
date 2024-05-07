function getComputerChoice() {
    let choice = "rock";
    let comNum = Math.floor(Math.random() * 10);
    if (comNum <= 3) {
        return "rock";
    } else if (comNum >= 7) {
        return "paper";
    } else {
        return "scissors";
    }
}

const winString = "やった! (You won!)";
const loseString = "残念... (You lost...)";
const tieString = "あいこでしょ! (You tied!)";

let humanScore = 0;
let computerScore = 0;

function playGame(choice) {
    let computerChoice = getComputerChoice();
    switch (choice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    results.textContent = tieString;
                    break;
                case "paper":
                    results.textContent = loseString;
                    computerScore++;
                    break;
                case "scissors":
                    results.textContent = winString;
                    humanScore++;
                    break;
                default:
                    results.textContent = "ERROR";
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    results.textContent = winString;
                    humanScore++;
                    break;
                case "paper":
                    results.textContent = tieString;
                    break;
                case "scissors":
                    results.textContent = loseString;
                    computerScore++;
                    break;
                default:
                    results.textContent = "ERROR";
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    results.textContent = loseString;
                    computerScore++;
                    break;
                case "paper":
                    results.textContent = winString;
                    humanScore++;
                    break;
                case "scissors":
                    results.textContent = tieString;
                    break;
                default:
                    results.textContent = "ERROR";
            }
            break;
        default:
            results.textContent = "ERROR";
    }
    humanScoreText.textContent = `Player: ${humanScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
        gameDiv.removeChild(title);
        gameDiv.removeChild(instructions);
        gameDiv.removeChild(gameButtons);
        gameDiv.removeChild(results);
        gameDiv.removeChild(score);
        if (humanScore === 5) {
            final.textContent = "You won the game!";
        } else {
            final.textContent = "You lost the game...";
        }
        gameDiv.appendChild(final);
    }
}

const gameDiv = document.querySelector(".gameContainer");

const title = document.createElement("h2");
title.classList.add("gameText");
title.textContent = "最初はグー, じゃんけんぽん!";

const instructions = document.createElement("h3");
instructions.classList.add("gameText");
instructions.textContent = "Select an option:";

gameDiv.appendChild(title);
gameDiv.appendChild(instructions);

const gameButtons = document.createElement("div");
gameButtons.classList.add("gameButtonContainer");

const rockButton = document.createElement("button");
rockButton.classList.add("choiceButtons");
rockButton.textContent = "グー (Rock)";
rockButton.addEventListener("click", () => {
    playGame("rock");
    console.log("Played game with rock as human choice");
});

const paperButton = document.createElement("button");
paperButton.classList.add("choiceButtons");
paperButton.textContent = "パー (Paper)";
paperButton.addEventListener("click", () => {
    playGame("paper");
    console.log("Played game with paper as human choice");
});

const scissorsButton = document.createElement("button");
scissorsButton.classList.add("choiceButtons");
scissorsButton.textContent = "チョキ (Scissors)";
scissorsButton.addEventListener("click", () => {
    playGame("scissors");
    console.log("Played game with scissors as human choice");
});

gameButtons.appendChild(rockButton);
gameButtons.appendChild(paperButton);
gameButtons.appendChild(scissorsButton); 

gameDiv.appendChild(gameButtons);

const results = document.createElement("h2");
results.classList.add("results");

const score = document.createElement("div");
score.classList.add("scoreDiv");

const humanScoreText = document.createElement("h3");
humanScoreText.classList.add("scores");

const computerScoreText = document.createElement("h3");
computerScoreText.classList.add("scores");

score.appendChild(humanScoreText);
score.appendChild(computerScoreText);

gameDiv.appendChild(results);
gameDiv.appendChild(score);

const final = document.createElement("div");
final.classList.add("final");
