let board = Array(3).fill().map(() => Array(3));
let htmlBoard=Array(3).fill().map(() => Array(3));

let initializeBoard = () => {
    for(let i=0; i<3; i++){
        htmlBoard[i] = Array.from(document.getElementsByClassName("cell"));
        for(let j=0; j<3; j++){
            htmlBoard[i][j] = board[i][j]; 

            htmlBoard[i][j].addEventListener("click",clickCell());
        }
    }
}

let clickCell = (e) => {
    
}


initializeBoard();