let userScore = 0;
let compScore = 0;
const emojis = document.querySelectorAll(".emoji")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const ranIdx = Math.floor(Math.random() * 3)
    return options[ranIdx]
};

const playGame = (userChoice) => {
    console.log("userChoice = ",userChoice);
    const comChoice = genCompChoice();
    console.log("comChoice = ", comChoice);

    if (userChoice === comChoice){
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin=comChoice === "paper" ? false : true
        }else if (userChoice === "paper"){
            userWin = comChoice === "rock" ? true : false
        }else {
            // user=scissor
           userWin= comChoice==="rock"? false:true
        }
        showWinner(userWin)
    }

}

const showWinner=  (userWin)=>{
    if(userWin){
        console.log("YOU Win")
    }else{
        console.log("Computer Win")

    }
}

const drawGame =()=>{
    console.log("game was draw")
}


emojis.forEach((emoji) => {
    // console.log(emoji.innerText)
    emoji.addEventListener("click", () => {
        const userChoice = emoji.getAttribute("id")
        // console.log("emoji was clicked", userChoice)
        playGame(userChoice)
    });
});
