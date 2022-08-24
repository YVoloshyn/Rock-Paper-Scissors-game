let userScore = 0, computerScore = 0;

// Return random variant of computer
function getComputerChoice() {
    const arr = ["Rock", "Paper", "Scissors"];
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random.toLowerCase();
}

//Single round of the game
function playRound(playerSelection, computerSelection){
    const computer = getComputerChoice();
    const player = prompt().toLowerCase();

    if ((computer == "rock" && player == "scissors") || (computer == "scissors" && player == "paper") || (computer == "paper" && player == "rock")) {
        computerScore++;
        return "Computer won!";
    } else if ((computer == "scissors" && player == "rock") || (computer == "paper" && player == "scissors") || (computer == "rock" && player == "paper")){
        userScore++;
        return "You won!";
    } else {
        return "Tie game!";
    }
}

//Function to run 5 games and define the winner
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        console.log("User: " + userScore + "; Computer: " + computerScore);
    }
    if (userScore > computerScore){
        console.log("You won! Congratulations!!!");
    } else if (userScore < computerScore){
        console.log("Oh no, computer won!");
    } else {
        console.log("Tie game!");
    }
}