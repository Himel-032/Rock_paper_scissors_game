let userScore = 0;
let comScore = 0;
const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");



const genCompChoice = () => {
    // rock,paper ,scissors
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}
const showWinner = (userWin, userChoice, comChoice) => {
    if(userWin){
        msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        document.querySelector("#user-score").innerText = userScore;
    }
    else{
        msg.innerText = `You lose! ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        comScore++;
        document.querySelector("#comp-score").innerText = comScore;
    }
}
const playGame = (userChoice) => {
    const comChoice = genCompChoice();

    if(userChoice == comChoice){
        msg.innerText = "It's a tie";
        msg.style.backgroundColor = "#081b31";
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin = comChoice == "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            userWin = comChoice == "scissors" ? false : true;
        }
        else if(userChoice == "scissors"){
            userWin = comChoice == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});