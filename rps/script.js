let playerChoice;
let pC1;
let pC2;
let choice;
let random;
let result;
let roundCount;

function getRoundCount() {
    window.confirm(`Round ${rounds}`);
};

function getPlayerChoice() {
    pC1 = (prompt("Rock, Paper, Scissors!"));
    pC2 = (pC1.toString())
    playerChoice = (pC2.toLowerCase());
    return playerChoice;
} ;

function getComputerChoice() {
    random = (Math.floor(Math.random() * 3));
    choice = random;
    return choice;
} ;

let rounds = 0;
let wins = 0;
let losses = 0;
for (rounds=1; rounds<6; rounds++) {

getRoundCount();
getPlayerChoice();
getComputerChoice();

if (playerChoice === "rock") {
    if (choice == 0) {
        result = "Paper beats Rock. You lose"
        losses++
    } 
    else if (choice == 1) {
        result = "Rock and Rock draw!"
    }
    else if (choice == 2) {
        result = "Rock beats Scissors. You win!"
        wins++
    } ;
} 
else if (playerChoice === "paper") {
    if (choice == 0) {
        result = "Paper and Paper draw!"
    }
    else if (choice == 1) {
        result = "Paper beats Rock. You win!"
        wins++
    }
    else if (choice == 2) {
        result = "Scissors beat Paper. You lose"
        losses++
    } ;
}
else if (playerChoice == "scissors") {
    if (choice === 0) {
        result = "Scissors beat Paper. You win!"
        wins++
    }
    else if (choice == 1) {
        result = "Rock beats Scissors. You lose"
        losses++
    }
    else if (choice == 2) {
        result = "Scissors and Scissors draw!"
    } 
}
else {
    window.confirm ("Invalid input.")
    rounds--;
    result = "Round Restarts" ;
};

window.confirm (result);
}
if ((wins)>(losses)) {
    window.confirm (`Result ${wins}-${losses}, you win!`)
}
else if ((wins)==(losses)) {
    window.confirm (`Result ${wins}-${losses}, it's a draw!`)
}
else if ((wins)<(losses)) {
    window.confirm (`Result ${wins}-${losses}, you lose!`)
} ;