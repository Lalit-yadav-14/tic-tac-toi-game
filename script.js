let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let messagecontainer = document.querySelector(".messagecontainer");
let msg = document.querySelector("#msg");

let playerx = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const newGame = ()=>{
    
        playerx=true;
        enableboxes();
        messagecontainer.classList.add("hide");
    
 
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("working");
        if(playerx===true){
            playerx=false;
            box.innerText=0;
        }
        else{
            // console.log("yes");
            playerx=true;
            box.innerText= "x";
        }
        box.disabled=true;
        checkwinner();
    });
});

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    messagecontainer.classList.remove("hide");
    disableboxes();
    newbtn.addEventListener("click",()=>{
        newGame();
        
    })
}

const checkwinner =() =>{
    for( let pattern of winpatterns){
        let pos1 =boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
            console.log("winner is",pos1);

            showWinner(pos1);
            }
        }
    }
    
};

resetbtn.addEventListener("click",()=>{
    enableboxes();
    playerx=true;
    box.innerText="";
    messagecontainer.classList.add("hide");
})











// if(playerx=boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]){
//     alert("player x is winner")
//     }
//     else{
//         alert("player 2 is winner");
// }