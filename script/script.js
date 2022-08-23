let variants = ["Rock", "Paper", "Scissors"];

// Return random varian of computer
function getComputerChoice(arr) {
    const random = arr[Math.floor(Math.random() * arr.length)];
    return (random);
}