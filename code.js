function getComputerChoice() {
    let seed = Math.floor(Math.random()*(3 - 0)) + 0;
    switch (seed) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function resultTie(playerSelection, computerSelection) {
    return "It's a Tie! " + playerSelection[0].toUpperCase() +
        playerSelection.slice(1).toLowerCase() + " stales " + computerSelection;
}

function resultLose(playerSelection, computerSelection) {
    return "Sorry, you Lose :( " + playerSelection[0].toUpperCase() +
        playerSelection.slice(1).toLowerCase() + " is beated by " + computerSelection;
}

function resultWin(playerSelection, computerSelection) {
    return "You've Won! " + playerSelection[0].toUpperCase() +
        playerSelection.slice(1).toLowerCase() + " beats " + computerSelection;
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()){
        case "rock":
            switch (computerSelection) {
                case "Rock":
                    return resultTie(playerSelection, computerSelection);
                case "Paper":
                    return resultLose(playerSelection, computerSelection);
                case "Scissors":
                    return resultWin(playerSelection, computerSelection);
            }
        case "paper":
            switch (computerSelection) {
                case "Rock":
                    return resultWin(playerSelection, computerSelection);
                case "Paper":
                    return resultTie(playerSelection, computerSelection);
                case "Scissors":
                    return resultLose(playerSelection, computerSelection);
            }
        case "scissors":
            switch (computerSelection) {
                case "Rock":
                    return resultLose(playerSelection, computerSelection);
                case "Paper":
                    return resultWin(playerSelection, computerSelection);
                case "Scissors":
                    return resultLose(playerSelection, computerSelection);
            }
    }
}

function Game() {
    for (let i = 0; i < 5; i++) {
        let choice = prompt("Type Rock, Paper, or Scissors")
        if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors") {
            console.log(playRound(choice,getComputerChoice()))
        }
        else {
            console.log("wrong input, play next round with valid choice")
            i--;
        }
    }
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();


console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection,computerSelection))

Game()
