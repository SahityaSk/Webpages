
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;

const winPatterns = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 4 , 6],
    [2 , 5 , 8],
    [3 , 4 , 5],
    [6 , 7 , 8],
]

const resetGame = () =>{
    let turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX){
        box.innerText = "X";
        box.style.color ="red";
        turnX = false;
        }
        else{
        box.innerText = "O";
        box.style.color ="blue";
        turnX = true;
        }
        box.disabled = true;
        cheakWinner();
    })
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner =(winner) =>{
    msg.innerText = `Ya-Hoo, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const cheakWinner = () =>{
    for(let patter of winPatterns){
        let pos1Val = boxes[patter[0]].innerText;
        let pos2Val = boxes[patter[1]].innerText;
        let pos3Val = boxes[patter[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val != ""){
            if(pos1Val === pos2Val && pos1Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);