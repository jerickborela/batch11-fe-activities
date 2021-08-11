const cells = Array.from(document.getElementsByClassName("cell"));
const playerOne = 'X';
const playerTwo = 'O';
const gameText = document.getElementById('gameText');
const currentState = [null,null,null,null,null,null,null,null,null];
const resetBtn = document.getElementById("resetBtn");
let currentPlayer = playerOne;
let turnCounter = 0;

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

const clickCell = (e) => {
    const i= e.target.id;
    if(!currentState[i]){
        currentState[i] = currentPlayer;
        e.target.innerText = currentPlayer;
        
        if(checkWinner()){
            gameText.innerText = `${currentPlayer} wins!`;
            for(let k=0; k<currentState.length; k++){
                cells[k].removeEventListener('click', clickCell);
            }
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
        gameText.innerText = "DRAW!"
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
            // highlightWin(a,b,c);
            break;
        }
    }
    return winner;
}

// const highlightWin = (a,b,c) => {
//     let a_win = document.getElementById(a);
//     let b_win = document.getElementById(b);
//     let c_win = document.getElementById(c);
//     a_win.style.background = "green";
//     b_win.style.background = "green";
//     c_win.style.background = "green";
// }
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
    initializeBoard();
}


resetBtn.addEventListener('click',resetBoard);




initializeBoard();