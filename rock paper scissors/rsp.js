let player = "Honza";
let myChoice = [];
let myHand = document.getElementById("myHand-el");
let compHand = document.getElementById("compHand-el");
let isAlive = false;
let message = document.getElementById("message-el");
let rps = ["rock", "paper", "scissors"];
let rockBtn = document.getElementById("rock-el");
let paperBtn = document.getElementById("paper-el");
let scissorsBtn = document.getElementById("scissors-el");
let button = document.getElementById("btn-el");
let newGameBtn = document.getElementById("new-game");

function whoWon () {
    if (myHand === "rock" && compHand === "scissors") {
        message.textContent = "I win!"
    } else if (myHand === "rock" && compHand === "paper") {
        message.textContent = "Computer wins!"
    } else if (myHand === "paper" && compHand === "scissors") {
        message.textContent = "Computer wins!"
    } else if (myHand === "paper" && compHand === "rock") {
        message.textContent = "I win!"
    } else if (myHand === "scissors" && compHand === "paper") {
        message.textContent = "I win!"
    } else if (myHand === "scissors" && compHand === "rock") {
        message.textContent = "Computer wins!"
    } else {message.textContent = "It's a tie!"}
    
}


rockBtn.addEventListener("click", function() {
    myChoice.push("rock");
    myHand.textContent += " " + myChoice[0];
    let hand = Math.floor(Math.random() * 3);
    return compHand.textContent += " " + rps[hand];
    }
)

rockBtn.addEventListener("click", whoWon);


paperBtn.addEventListener("click", function() {
    myChoice.push("paper");
    myHand.textContent += " " + myChoice[0];
    let hand = Math.floor(Math.random() * 3);
    return compHand.textContent += " " + rps[hand];
    }
)

paperBtn.addEventListener("click", whoWon);

scissorsBtn.addEventListener("click", function() {
    myChoice.push("scissors");
    myHand.textContent += " " + myChoice[0];
    let hand = Math.floor(Math.random() * 3);
    return compHand.textContent += " " + rps[hand];
    }
)

scissorsBtn.addEventListener("click", whoWon);

newGameBtn.addEventListener("click", function () {
    myHand.textContent = "";
    compHand.textContent = "";
})
