var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCompChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}
function convertToWord(letter) {
    if (letter == "r") return "Rock";
    else if (letter == "p") return "Paper";
    else if (letter == "s") return "Scissors"
}
function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(compChoice) + ". You Win!";
    result_p.classList.add("green");
    setTimeout(function(){result_p.classList.remove("green")}, 1500);
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(compChoice) + " beats " + convertToWord(userChoice) + ". You Lose.";
    result_p.classList.add("red");
    setTimeout(function(){result_p.classList.remove("red")}, 1500);
}

function draw(userChoice, compChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(compChoice) + ". It's a draw.";
    result_p.classList.add("gray");
    setTimeout(function(){result_p.classList.remove("gray")}, 1500);
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch(userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", function() {
        game("r");
    })
    paper_div.addEventListener("click", function() {
        game("p");
    
    })
    scissors_div.addEventListener("click", function() {
        game("s");
    
    })
}

main();