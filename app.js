const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let yourChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) => {
    possibleChoice.addEventListener("click", (e) => {
        yourChoice = e.target.id;
        yourChoiceDisplay.textContent = yourChoice;
        generateComputerChoice();
        getResult();
    });
});

function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        computerChoice = "rock";
    }
    if (randomNum === 1) {
        computerChoice = "paper";
    }
    if (randomNum === 2) {
        computerChoice = "scissors";
    }
    computerChoiceDisplay.textContent = computerChoice;
}

function getResult() {
    if (computerChoice === yourChoice) {
        result = "It's a draw";
    }
    if (computerChoice === "rock" && yourChoice === "paper") {
        result = "You win";
    }
    if (computerChoice === "rock" && yourChoice === "scissors") {
        result = "You lose";
    }
    if (computerChoice === "paper" && yourChoice === "scissors") {
        result = "You win";
    }
    if (computerChoice === "paper" && yourChoice === "rock") {
        result = "You lose";
    }
    if (computerChoice === "scissors" && yourChoice === "paper") {
        result = "You lose";
    }
    if (computerChoice === "scissors" && yourChoice === "rock") {
        result = "You win";
    }
    resultDisplay.textContent = result;
}
