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

function getHumanChoice() {
    let choice = window.prompt("Saishowaguu, jankenpon! (Make a choice of rock, paper, or scissors!)");
    switch (choice.toLowerCase()) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            window.alert("You must enter one of the three options!");
            return "nochoice";
    }
}

function playGame() {
    let humanSelection = "rock";
    let computerSelection = "rock";

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log(`Human Selection: ${humanChoice}`);
        console.log(`Computer Selection: ${computerChoice}`);
        switch (humanChoice) {
            case "rock":
                switch (computerChoice) {
                    case "rock":
                        console.log("Aiko desho! (You tied!)");
                        break;
                    case "paper":
                        console.log("Zannen... (You lost...)");
                        computerScore++;
                        break;
                    case "scissors":
                        console.log("Yatta! (You won!)");
                        humanScore++;
                        break;
                    default:
                        console.log("Game aborted");
                }
                break;
            case "paper":
                switch (computerChoice) {
                    case "rock":
                        console.log("Yatta! (You won!)");
                        humanScore++;
                        break;
                    case "paper":
                        console.log("Aiko desho! (You tied!)");
                        break;
                    case "scissors":
                        console.log("Zannen... (You lost...)");
                        computerScore++;
                        break;
                    default:
                        console.log("Game aborted");
                }
                break;
            case "scissors":
                switch (computerChoice) {
                    case "rock":
                        console.log("Zannen... (You lost...)");
                        computerScore++;
                        break;
                    case "paper":
                        console.log("Yatta! (You won!)");
                        humanScore++;
                        break;
                    case "scissors":
                        console.log("Aiko desho! (You tied!)");
                        break;
                    default:
                        console.log("Game aborted");
                }
                break;
            default:
                console.log("Game aborted");
        }
    }

    for (i = 0; i < 5; i++) {
        playRound(humanSelection, computerSelection);
    }
    console.log("Final Scores");
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lost...");
    } else {
        console.log("You tied.");
    }
}