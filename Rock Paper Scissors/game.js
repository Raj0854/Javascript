let userScore = 0;
let compScore = 0;
const emojis = document.querySelectorAll(".emoji")
let yourscore = document.querySelector("#userscore")
let comscore = document.querySelector("#compScore")
let msg = document.querySelector("#msg")
let msgcontainer = document.querySelector(".msg-container")


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const ranIdx = Math.floor(Math.random() * 3)
    return options[ranIdx]
};

const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    const comChoice = genCompChoice();
    console.log("comChoice = ", comChoice);

    if (userChoice === comChoice) {
        drawGame(userChoice, comChoice);
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true
        } else if (userChoice === "paper") {
            userWin = comChoice === "rock" ? true : false
        } else {
            // user=scissor
            userWin = comChoice === "rock" ? false : true
        }
        showWinner(userWin, userChoice, comChoice)
    }

}

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        console.log("YOU Win")
        yourscore.innerText = userScore += 1
        msg.innerText = `You chose ${userChoice} and computer chose ${comChoice}. You Win! Play again.`
        msg.style.backgroundColor = "green"
        
    } else {
        console.log("Computer Win")
        comscore.innerText = compScore += 1
        msg.innerText = `You chose ${userChoice} and computer chose ${comChoice}. Computer Wins! Play again.`
        msg.style.backgroundColor = "red"

    }
}

const drawGame = (userChoice, comChoice) => {
    msg.innerText = `You chose ${userChoice} and computer chose ${comChoice}. It's a draw! Play again.`
    msg.style.backgroundColor = "gray"
}



emojis.forEach((emoji) => {
    // console.log(emoji.innerText)
    emoji.addEventListener("click", () => {
        const userChoice = emoji.getAttribute("id")
        // console.log("emoji was clicked", userChoice)
        playGame(userChoice)
    });
});
