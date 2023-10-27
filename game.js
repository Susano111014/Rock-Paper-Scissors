// getComputerChoice();

let randomNum =  Math.floor(Math.random() * 3);

function getComputerChoice (role) {
    if (randomNum == 0){
        return "Rock"
    } else if (randomNum == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

let computer = getComputerChoice;
