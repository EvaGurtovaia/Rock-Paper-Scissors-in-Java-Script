const userChoiceDisplay = document.createElement("h1");
const computerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const gameGrid = document.getElementById("game");
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceDisplay.textContent = "Compute choice: " + randomChoice;
    computerChoice = randomChoice;
};

const handleClick = (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.textContent = "Your choice: " + userChoice;
    generateComputerChoice();
    getResult();
};

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement("button");
    button.id = choices[i];
    button.textContent = choices[i];
    button.addEventListener("click", handleClick);
    gameGrid.appendChild(button);
}

const getResult = () => {
    switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
            resultDisplay.textContent = "You win!";
            break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            resultDisplay.textContent = "You lose!";
            break;
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            resultDisplay.textContent = "It's a draw!";
            break;
    }
};
