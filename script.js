document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("userScores").value = userScore;
    document.getElementById("computerScores").value = computerScore;
});

const scoresSection = document.querySelector('.gameResult'),
    paragraph = document.createElement('p'); 
    scoresSection.appendChild(paragraph);

let userScore = 0, 
    computerScore = 0;

let btnRock = document.querySelector(".rock"),
    btnPaper = document.querySelector(".paper"),
    btnScissors = document.querySelector(".scissors");

btnRock.onclick = () => playRound("rock");
btnPaper.onclick = () => playRound("paper");
btnScissors.onclick = () => playRound("scissors");

// Return random variant of computer
function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random;
}

//Single round of the game
function playRound(playerSelection){
    let computer = getComputerChoice();
    let player = playerSelection;

    if ((computer == "rock" && player == "scissors") || (computer == "scissors" && player == "paper") || (computer == "paper" && player == "rock")) {
        computerScore++;
        document.getElementById("computerScores").value = computerScore;
        return paragraph.textContent = "Computer won!";
        // return alert("Computer won!");
    } else if ((computer == "scissors" && player == "rock") || (computer == "paper" && player == "scissors") || (computer == "rock" && player == "paper")){
        userScore++;
        document.getElementById("userScores").value = userScore;
        return paragraph.textContent = "You won!";
    } else {
        return paragraph.textContent = "Tie game!";
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
        console.log("Tie game! Let's play again?");
    }
}