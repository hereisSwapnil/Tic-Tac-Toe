let music = new Audio("assets/sounds/music.mp3")
let play = new Audio("assets/sounds/ting.mp3")
let audioGameover = new Audio("assets/sounds/gameover.mp3")
let turn = "X"
let gameover = 0;

const changeTurn = () => {
    play.play();
    return (turn==="X")?"0":"X"
}

const checkFill = ()=>{
    let check = 0;
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element =>{
        let boxtext = element.querySelector(".boxtext")
            if(boxtext.innerHTML===""){
                check+=1;
            }
        })
        if((check===0) && (gameover===0)){
            document.getElementsByClassName("container")[0].style.backgroundColor = "white";
            document.getElementsByClassName("container")[0].style.opacity = "0.2";
            document.getElementsByClassName("retrydiv")[0].style.display = "flex";
            let box = document.getElementsByClassName("box");
            Array.from(box).forEach(e=>{
                e.style.color = "white";
            })
            audioGameover.play();
        }
}

const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let boxes = document.getElementsByClassName("box");
    wins = [
        [0 , 1 , 2],
        [3 , 4 , 5],
        [6 , 7 , 8],
        [0 , 3 , 6],
        [1 , 4 , 7],
        [2 , 5 , 8],
        [0 , 4 , 8],
        [2 , 4 , 6]
    ]
    wins.forEach(e => {
        if((boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[2]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[0]].innerHTML !== "")){
            gameover = 1;
            document.getElementsByClassName("turninfo")[0].innerHTML = boxtexts[e[0]].innerHTML + " Won!!";
            boxes[e[0]].style.backgroundColor = "yellow";
            boxes[e[1]].style.backgroundColor = "yellow";
            boxes[e[2]].style.backgroundColor = "yellow";
            document.getElementsByClassName("image")[0].style.width = "250px";
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
        let boxtext = element.querySelector(".boxtext")
        element.addEventListener("click",()=>{
            if(boxtext.innerHTML===""){
                boxtext.innerHTML = turn;
                turn = changeTurn();
                checkWin();
                if(gameover !== 1){
                    document.getElementsByClassName("turninfo")[0].innerHTML = "Turn for " + turn;
                }
                checkFill();
            }
        })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    let boxes = document.getElementsByClassName("box");
    Array.from(boxtexts).forEach(e=>{
        e.innerHTML = "";
    })
    Array.from(boxes).forEach(e=>{
        e.style.backgroundColor = "white";
    })
    turn = "X";
    gameover=0;
    document.getElementsByClassName("turninfo")[0].innerHTML = "Turn for " + turn;
    document.getElementsByClassName("image")[0].style.width = "0px";
    document.getElementsByClassName("container")[0].style.backgroundColor = "transparent";
    document.getElementsByClassName("container")[0].style.opacity = "1";
    document.getElementsByClassName("retrydiv")[0].style.display = "none";
    let box = document.getElementsByClassName("box");
    Array.from(box).forEach(e=>{
        e.style.color = "black";
    })
})

document.getElementById("volume").addEventListener("click" , () => {
    if(document.getElementById("volume").className === "fas fa-volume-mute"){
        document.getElementById("volume").className = "fas fa-volume-up";
        music.play();
    }
    else{
        document.getElementById("volume").className = "fas fa-volume-mute";
        music.pause();
        music.currentTime = 0;
    }
    
})

document.getElementsByClassName("retrydiv")[0].addEventListener("click" , ()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    let boxes = document.getElementsByClassName("box");
    Array.from(boxtexts).forEach(e=>{
        e.innerHTML = "";
    })
    Array.from(boxes).forEach(e=>{
        e.style.backgroundColor = "white";
    })
    turn = "X";
    gameover=0;
    document.getElementsByClassName("turninfo")[0].innerHTML = "Turn for " + turn;
    document.getElementsByClassName("image")[0].style.width = "0px";
    document.getElementsByClassName("container")[0].style.backgroundColor = "transparent";
    document.getElementsByClassName("container")[0].style.opacity = "1";
    document.getElementsByClassName("retrydiv")[0].style.display = "none";
    let box = document.getElementsByClassName("box");
    Array.from(box).forEach(e=>{
        e.style.color = "black";
    })
})