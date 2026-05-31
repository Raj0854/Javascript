let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGame=document.querySelector("#newBtn")
let msgContainer=document.querySelector(".msg-container");
let msgText=document.querySelector("#msg");
let playerX = true;

const winPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerX) {
            box.innerText = "X";
            playerX = false;

        } else {
            box.innerText = "O ";
            playerX = true;

        }
        box.disabled = true;
        checkWinner();

    })
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                disableAllBoxes();
            }else {
                determineDraw();
            }
        }
    }

}
const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const showWinner = (winner) => {
    msgContainer.style.display = "block";
    msgText.innerText = ` Congratulations! Player ${winner} wins!`;
    msgContainer.classList.remove("hide");
}

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.style.display = "none";
    playerX = true;
});

newGame.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.style.display = "none";
    playerX = true;
});

const determineDraw = () => {
    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false;
        }
    });
    if (isDraw) {
        msgContainer.style.display = "block";
        msgText.innerText = "It's a draw!";
        msgContainer.classList.remove("hide");
    }
}