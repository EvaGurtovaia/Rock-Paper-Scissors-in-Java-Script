const computerChoice = document.getElementById("computer-choice");
const yourChoice = document.getElementById("user-choice");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;

possibleChoices.forEach((possibleChoice) => {
    possibleChoice.addEventListener("click", (e) => {
        userChoice = e.target.dispatchEvent;
    });
});
