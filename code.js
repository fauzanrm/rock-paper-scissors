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

console.log(getComputerChoice())