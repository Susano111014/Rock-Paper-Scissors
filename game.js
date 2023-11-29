// getComputerChoice();
//section1//
let randomNum =  Math.floor(Math.random() * 3);

function getComputerChoice () {
    randomNum =  Math.floor(Math.random() * 3);
    if (randomNum == 0){
        randomNum = 0;
        return "rock"
    } else if (randomNum == 1) {
        randomNum = 0;
        return "paper"
    } else {
        randomNum = 0;
        return "scissors"
    }
}

//section2
let computer = getComputerChoice;

let filled = false;
let champion = false;
function firstRound (bot, player){
    filled = false;
    champion = false;
    if (bot == "rock" && player == "rock"){
        return "it's a tie rock vs rock";
    }else if(bot == "rock" && player == "paper"){
        filled = true;
        return "You win, Paper beat Rock"
    }else if(bot == "rock" && player == "scissors"){
        champion = true;
        return "You lose Rock beat Scissors"

    }if (bot == "paper" && player == "paper"){
        return "it's a tie paper vs paper";
    }else if(bot == "paper" && player == "rock"){
        champion = true;
        return "You lose, Paper beat Rock"
    }else if(bot == "paper" && player == "scissors"){
        filled = true;
        return "You win Scissors beat Paper"

    }if (bot == "scissors" && player == "scissors"){
        return "it's a tie scissors vs scissors";
    }else if(bot == "scissors" && player == "paper"){
        champion = true;
        return "You lose, Scissors beat Paper"     
    }else if(bot == "scissors" && player == "rock")
        filled = true;
        return "You win Rock beat Scissors"
}

let roundOne = firstRound;
    const btn = document.querySelector(".rock");
    const btn2 = document.querySelector(".paper");
    const btn3 = document.querySelector(".scissors");
    
    btn.addEventListener('click',() => {
        const game = 'rock';
        alert(roundOne(computer,game));
    });
    
    btn2.addEventListener('click',() => {
        const game = 'paper';
        alert(roundOne(computer(),game));
    });

    btn3.addEventListener('click',() => {
        const game = 'scissors';
        alert(roundOne(computer(),game));
    });

//section3
// let winBot = 0;
// let winUser = 0;
// let loseBot = 0;
// let loseUser = 0;
// let tie = 0;

// let signaled;
// function game() {
//     for (let cont = 0; cont < 5; cont++) { 
//         let playerSelect = prompt("choose your role");
//         playerSelect = playerSelect.toLowerCase();
//         signaled = roundOne(computer(),playerSelect);
//         if (champion == true) { 
//             winBot ++;
//             loseUser ++;
        
//         } else if (filled == true) { 
//             loseBot ++;
//             winUser ++;
            
//         } else 
//             tie ++;
//             alert(signaled);
//     }
//     return winBot > winUser  
//     ?"The winner is the Machine"
//     :winUser > tie || winUser > winBot
//     ? "You are the winner"
//     : "it's a tie in whole game"
// }
// alert(game());