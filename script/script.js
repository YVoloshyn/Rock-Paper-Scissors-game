// Return random variant of computer
function getComputerChoice() {
    const arr = ["Rock", "Paper", "Scissors"];
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random.toLowerCase();
}

//Single round of the game
function singleRound(playerSelection, computerSelection){
    const computer = getComputerChoice();
    console.log(computer);
    const player = prompt().toLowerCase();

    if ((computer == "rock" && player == "scissors") || (computer == "scissors" && player == "paper") || (computer == "paper" && player == "rock")) {
        return console.log("Computer won!");
    } else if ((computer == "scissors" && player == "rock") || (computer == "paper" && player == "scissors") || (computer == "rock" && player == "paper")){
        return console.log("You won!");
    } else {
        return console.log("Tie game!");
    }
}