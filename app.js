/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let userScore = 0;
let computerScore = 0;

/*------------------------ Cached Element References ------------------------*/
const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');
const scoreBoard = document.querySelector('.score-board')
const result = document.querySelector('.result > p');
const choiceRock = document.querySelector('#r');
const choicePaper = document.querySelector('#p');
const choiceScissors = document.querySelector('#s');


/*----------------------------- Event Listeners -----------------------------*/

choiceRock.addEventListener('click', function() {
    game('r');
})
choicePaper.addEventListener('click', function() {
    game('p');
})
choiceScissors.addEventListener('click', function() {
    game('s');
})



/*-------------------------------- Functions --------------------------------*/

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; // randonNumber works as the index
}

function convertToWord(letter) {
    if (letter === "r") {
        return "Rock";
    }
    if (letter === "p") {
        return "Paper";
    } else {
         return "Scissor";
    }

}

function userWins(userChoice, computerChoice) {
    userScore ++;
    userScore_span.innerHTML = userScore;
    result.innerHTML = convertToWord(userChoice)  + ' beats ' + convertToWord(computerChoice)  + ' 👨‍💻 User Wins 🔥';
}

function computerWins(userChoice, computerChoice) {
    computerScore ++;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = convertToWord(computerChoice)  + ' beats ' + convertToWord(userChoice)  +' 💻 Computer Wins';
}

function draw() {
    result.innerHTML = "It's a draw";
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            userWins(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            computerWins(userChoice, computerChoice);
            break;
        case "ss":
        case "rr":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}
