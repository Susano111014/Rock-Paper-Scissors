// getComputerChoice();
//section1//
let randomNum =  Math.floor(Math.random() * 3);

function getComputerChoice (role) {
    if (randomNum == 0){
        return "rock"
    } else if (randomNum == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

//section2
let computer = getComputerChoice;

let playerSelect = prompt("choose your role");

function firstRound (bot, player){
    if (bot == "rock" && player == "rock"){
        return "it's a tie";
    }else if(bot == "rock" && player == "paper"){
        return "You win, Rock beat Paper"
    }else if(bot == "rock" && player == "scissors")
        return "You lose Rock beat Scissors"

    if (bot == "paper" && player == "paper"){
        return "it's a tie";
    }else if(bot == "paper" && player == "rock"){
        return "You lose, Paper beat Rock"
    }else if(bot == "paper" && player == "scissors")
        return "You win Scissors beat Paper"

    if (bot == "scissors" && player == "scissors"){
        return "it's a tie";
    }else if(bot == "scissors" && player == "paper"){
        return "You lose, Scissors beat Paper"
    }else if(bot == "scissors" && player == "rock")
        return "You win Rock beat Scissors"
}

let roundOne = firstRound;