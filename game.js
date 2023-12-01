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
//variables of the five plays counts;
let winBot = 0;
let winUser = 0;
let loseBot = 0;
let loseUser = 0;
let tie = 0;

//section3
let roundOne = firstRound;
    const btn = document.querySelector(".rock");
    const btn2 = document.querySelector(".paper");
    const btn3 = document.querySelector(".scissors");
    const score = document.querySelector(".score");
    score.setAttribute("style","width:250px; height:100px; background-color: yellow; text-align:center;");
    const textScore = document.querySelector(".text"); 

    let fiveRounds = 0;
    btn.addEventListener("click", () => {
        textScore.textContent = "";
        let game = "rock";
        let winner = roundOne(computer(),game)
        textScore.textContent += `${winner}`;
        textScore.setAttribute("style","white-space: break-spaces")
        console.log(score);
        countGame();
        fiveRounds++;
        (fiveRounds == 5)
        ?testWinner()
        :"Not Passed";
    });
    
    btn2.addEventListener("click",() => {
        textScore.textContent = "";
        let game = "paper";
        let winner = roundOne(computer(),game);
        textScore.textContent += `Score ${winner}`;
        console.log(score);
    });

    btn3.addEventListener("click",() => {
        textScore.textContent = "";
        let game = 'scissors';
        let winner = roundOne(computer(),game);
        textScore.textContent += `Score ${winner}`;
        console.log(score);
    });

    

//section3

function countGame() {
        
    if (champion == true) { 
            winBot ++;
            loseUser ++;
        
        } else if (filled == true) { 
            loseBot ++;
            winUser ++;
            
        } else 
            tie ++;
    }
     
function testWinner (){
    if(winBot > winUser ){
        textScore.textContent += `

The winner is the bot`;
    }else if(winUser > tie || winUser > winBot){
        textScore.textContent += `

You are the winner of the game!`;
    }else 
        textScore.textContent += `

its a tie in whole game`;
    
    fiveRounds = 0;
    winBot = 0;
    winUser = 0;
    loseBot = 0;
    loseUser = 0;
    tie = 0;
 }