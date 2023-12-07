// getComputerChoice();
//section1// //section 2 random throw roll game which choose bot
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

const computer = getComputerChoice;

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
//variables of the five play counts;
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
    const score = document.querySelector(".score");//is the table display witch mark the game's score
    score.setAttribute("style","width:250px; height:100px; text-align:center;");
    const textScore = document.querySelector(".text"); 
    const counter = document.querySelectorAll(".counter");
    let fiveRounds = 0;
    

    btn.addEventListener("click", () => {
        textScore.textContent = "";
        let game = "rock";
        let winner = roundOne(computer(),game);
        textScore.textContent += `${winner}`;
        score.style.background = '#D0021B';
        textScore.setAttribute("style","white-space: break-spaces"); 
        countGame();
        counter[0].textContent = `user won points ${winUser}`;
        counter[1].textContent = `user lose points ${loseUser}`;
        counter[2].textContent = `bot won points ${winBot}`; 
        counter[3].textContent = `bot lose points ${loseBot}`;
        (fiveRounds == 5)
        ?testWinner()
        :"Not Passed";
    });
    
    btn2.addEventListener("click",() => {
        textScore.textContent = "";
        let game = "paper";
        let winner = roundOne(computer(),game);
        textScore.textContent += `Score ${winner}`;
        score.style.background = '#F8E71C';
        textScore.setAttribute("style","white-space: break-spaces");
        console.log(score);
        countGame();
        counter[0].textContent = `user won points ${winUser}`;
        counter[1].textContent = `user lose points ${loseUser}`;
        counter[2].textContent = `bot won points ${winBot}`; 
        counter[3].textContent = `bot lose points ${loseBot}`;
        (fiveRounds == 5)
        ?testWinner()
        :"Not Passed";
    });

    btn3.addEventListener("click",() => {
        textScore.textContent = "";
        let game = 'scissors';
        let winner = roundOne(computer(),game);
        textScore.textContent += `Score ${winner}`;
        score.style.background = '#7ED321';
        textScore.setAttribute("style","white-space: break-spaces");
        console.log(score);
        countGame();
        counter[0].textContent = `user won points ${winUser}`;
        counter[1].textContent = `user lose points ${loseUser}`;
        counter[2].textContent = `bot won points ${winBot}`; 
        counter[3].textContent = `bot lose points ${loseBot}`;
        (fiveRounds == 5)
        ?testWinner()
        :"Not Passed";
    });

    
//count the wins, losses and tie once iteration game round

function countGame() {    
    if (champion == true) { 
            winBot ++;
            loseUser ++;
            fiveRounds++;
        } else if (filled == true) { 
            loseBot ++;
            winUser ++;
            fiveRounds++;
        } else 
            tie ++;
    }
    //function which is used for send the winner, loser and tie in the whole game.
function testWinner (){
    if(winBot > winUser ){
        textScore.textContent += `

The winner is the bot`;
    }else if(winUser > tie || winUser > winBot){
        textScore.textContent += `

You are the winner of the game!`;
    }  
    fiveRounds = 0;
    winBot = 0;
    winUser = 0;
    loseBot = 0;
    loseUser = 0;
    tie = 0;
 }