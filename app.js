const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("user-choice");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let yourChoice;
let computerChoice;

possibleChoices.forEach((possibleChoice) => {
    possibleChoice.addEventListener("click", (e) => {
        yourChoice = e.target.id;
        yourChoiceDisplay.textContent = yourChoice;
        generateComputerChoice();
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
    computerChoiceDisplay.innerHTML = computerChoice;
}
