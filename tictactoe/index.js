const cells = Array.from(document.getElementsByClassName("cell"));
const playerOne = 'X';
const playerTwo = 'O';
const gameText = document.getElementById('gameText');
let currentState = [null,null,null,null,null,null,null,null,null];
let controls = document.getElementsByClassName("controls");
const resetBtn = document.getElementById("resetBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentPlayer = playerOne;
let turnCounter = 0;
let history = [[],[],[],[],[],[],[],[],[]];
let historyCopy = [];
let saveMoves = [];

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];




/*add styling to the grid*/
const initializeBoard = () => {
    cells.forEach((cell, index) => {
        let styling = "";
        /*add border-bottom to top row*/
        if(index<3) { 
            styling += 'border-bottom: 5px solid #FFF;';
        }
        
        /*add border-right to left column*/
        if(index%3 === 0) { //left-most column needs a border 
            styling += 'border-right: 5px solid #FFF;';
        }

        /*add border-left to right column*/
        if(index%3 === 2){
            styling += 'border-left: 5px solid #FFF;';
        }

        /*add border-top to the bottom row*/
        if(index>5) {
            styling += 'border-top: 5px solid #FFF;';
        }
        cell.style = styling;
        cell.addEventListener("click", clickCell);
    })
}

/*adding click event on each cell and checking for win every click*/
const clickCell = (e) => {
    const i= e.target.id;
    if(!currentState[i]){
        currentState[i] = currentPlayer;
        e.target.innerText = currentPlayer;
        for(let g=0; g<currentState.length; g++){
            history[turnCounter][g] = currentState[g];
        }
        
        console.log(history);
        historyCopy = Array.from(history);
        if(checkWinner()){ 
            gameText.innerText = `${currentPlayer} wins!`;
            for(let k=0; k<currentState.length; k++){
                cells[k].removeEventListener('click', clickCell);
            }
            removeBlank(history);
            removeBlank(historyCopy);
            controls[0].style.display="flex";
            controls[0].style.justifyContent="space-around";
            nextBtn.style.opacity = "0";
            nextBtn.style.pointerEvents="none";
            return;
        }
        if(currentPlayer === playerOne){
            currentPlayer = playerTwo;
            turnCounter++;
        }else{
            currentPlayer = playerOne;
            turnCounter++;
        }
    }
    if(turnCounter === 9){
        gameText.innerText = "DRAW!";
        removeBlank(history);
        removeBlank(historyCopy);
        controls[0].style.display="flex";
        controls[0].style.justifyContent="space-around";
        nextBtn.style.opacity = "0";
        nextBtn.style.pointerEvents="none";
    }
}

const checkWinner = () => {
    let winner = false;
    for (let j = 0; j <winPatterns.length; j++) {
        const winState = winPatterns[j];
        let a = currentState[winState[0]];
        let b = currentState[winState[1]];
        let c = currentState[winState[2]];
        if (a === null || b === null || c === null) {
            continue;
        }
        if (a === b && b === c) {
            winner = true;
            break;
        }
    }
    return winner;
}


const removeBlank = (arr) => {
    for(let y=arr.length-1; y>=0; y--){
        if(arr[y].length != 0){
            return;
        }else{
           arr.pop();
        }
    }   
}

const goPrev = () => {
    let ctr = historyCopy.length - 1;
    currentState = [null,null,null,null,null,null,null,null,null];
    nextBtn.style.opacity = "1";
    nextBtn.style.pointerEvents="auto";
    if(ctr == 0){
        prevBtn.style.opacity = "0";
        prevBtn.style.pointerEvents = "none";
    }else if(ctr == 1){
        ctr -= 1;
        for(let n=0; n<9 ; n++){
            currentState[n] = historyCopy[ctr][n];
            document.getElementById(n).innerText = currentState[n];
        }
        historyCopy.pop();
        prevBtn.style.opacity = "0";
        prevBtn.style.pointerEvents = "none";
    }else{
        ctr -= 1;
        for(let n=0; n<9 ; n++){
            currentState[n] = historyCopy[ctr][n];
            document.getElementById(n).innerText = currentState[n];
        }
        historyCopy.pop();
        prevBtn.style.opacity = "1";
        prevBtn.style.pointerEvents="auto";
    }
}

const goNext = () => {
    let ctr = historyCopy.length;
    currentState = [null,null,null,null,null,null,null,null,null];
    prevBtn.style.opacity = "1";
        prevBtn.style.pointerEvents="auto";
    if(ctr == history.length){
        nextBtn.style.opacity = "0";
        nextBtn.style.pointerEvents = "none";
    }else if(ctr == history.length - 1){
        historyCopy.push(history[ctr]);
        for(let n=0; n<9; n++){
            currentState[n] = historyCopy[ctr][n];
            document.getElementById(n).innerText=currentState[n];
        }
        nextBtn.style.opacity = "0";
        nextBtn.style.pointerEvents = "none";
    }else{
        historyCopy.push(history[ctr]);
        for(let n=0; n<9; n++){
            currentState[n] = historyCopy[ctr][n];
            document.getElementById(n).innerText=currentState[n];
        }
        nextBtn.style.opacity = "1";
    }
}

const resetBoard = () => {
    for(let h=0; h<currentState.length; h++){
        currentState[h] = null;
    }
   
    for(let g=0; g<cells.length; g++){
        cells[g].innerText = '';
    }
    gameText.innerText = "Let's go!"
    currentPlayer = playerOne;
    turnCounter = 0;
    history = [[],[],[],[],[],[],[],[],[]];
    let historyCopy = [];
    controls[0].style.display="none";
    

    initializeBoard();
}

nextBtn.addEventListener('click',goNext);
prevBtn.addEventListener('click',goPrev);
resetBtn.addEventListener('click',resetBoard);
initializeBoard();