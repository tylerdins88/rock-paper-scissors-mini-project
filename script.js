// var randomIndex = Math.floor(Math.random() * 3);
// var computerGuess = options[randomIndex];
// console.log(computerGuess);

if (confirm("Would you like to play a game?")) {
    console.log("Yes");
    rockPaperScissors();
} else {
    alert("Okay, Goodbye")
}

var computerMoves = ["Rock", "Paper", "Scissors"];

function randomMove(computerMoves) {

    return computerMoves[Math.floor(Math.random() * computerMoves.length)];

}

console.log(randomMove(computerMoves));

function rockPaperScissors() {
    var userMove;

    userMove = prompt("What move would you like to select?", "Rock, Paper, or Scissors");

    console.log(userMove);

    // if (userMove === "Rock")

}