const boardSize = 8;
const WHITE_PLAYER = 'white';
const DARK_PLAYER = 'dark';
let pieces = [];

class Piece {
    constructor(row, col, type, player) {
        this.row = row;
        this.col = col;
        this.type = type;
        this.player = player;
    }
}

function getInitialBoard() {
    let result = [];
    result.push(new Piece(0, 0, "rook", DARK_PLAYER))
    result.push(new Piece(0, 1, "knight", DARK_PLAYER))
    result.push(new Piece(0, 2, "bishop", DARK_PLAYER))
    result.push(new Piece(0, 3, "king", DARK_PLAYER))
    result.push(new Piece(0, 4, "queen", DARK_PLAYER))
    result.push(new Piece(0, 5, "bishop", DARK_PLAYER))
    result.push(new Piece(0, 6, "knight", DARK_PLAYER))
    result.push(new Piece(0, 7, "rook", DARK_PLAYER))
    result.push(new Piece(1, 0, "pawn", DARK_PLAYER))
    result.push(new Piece(1, 1, "pawn", DARK_PLAYER))
    result.push(new Piece(1, 2, "pawn", DARK_PLAYER))
    result.push(new Piece(1, 3, "pawn", DARK_PLAYER))
    result.push(new Piece(1, 4, "pawn", DARK_PLAYER))
    result.push(new Piece(1, 5, "pawn", DARK_PLAYER))
    result.push(new Piece(1, 6, "pawn", DARK_PLAYER))
    result.push(new Piece(1, 7, "pawn", DARK_PLAYER))


    result.push(new Piece(7, 0, "rook", WHITE_PLAYER))
    result.push(new Piece(7, 1, "knight", WHITE_PLAYER))
    result.push(new Piece(7, 2, "bishop", WHITE_PLAYER))
    result.push(new Piece(7, 3, "king", WHITE_PLAYER))
    result.push(new Piece(7, 4, "queen", WHITE_PLAYER))
    result.push(new Piece(7, 5, "bishop", WHITE_PLAYER))
    result.push(new Piece(7, 6, "knight", WHITE_PLAYER))
    result.push(new Piece(7, 7, "rook", WHITE_PLAYER))
    result.push(new Piece(6, 0, "pawn", WHITE_PLAYER))
    result.push(new Piece(6, 1, "pawn", WHITE_PLAYER))
    result.push(new Piece(6, 2, "pawn", WHITE_PLAYER))
    result.push(new Piece(6, 3, "pawn", WHITE_PLAYER))
    result.push(new Piece(6, 4, "pawn", WHITE_PLAYER))
    result.push(new Piece(6, 5, "pawn", WHITE_PLAYER))
    result.push(new Piece(6, 6, "pawn", WHITE_PLAYER))
    result.push(new Piece(6, 7, "pawn", WHITE_PLAYER))





    return result;
}

//addressing the image file individually
function addImage(cell, type, name) {
    const image = document.createElement('img');
    image.src = 'images/' + type +"/"+ name + '.png';
    cell.appendChild(image);
}
// places pieces according to their right chess placement
function addImageByIndex(cell, player, index) {
    if (index === 0 || index === 7) {
        addImage(cell, player, 'rook');
    } else if (index === 1 || index === 6) {
        addImage(cell, player, 'knight');
    } else if (index === 2 || index === 5) {
        addImage(cell, player, 'bishop');
    } else if (index === 3) {
        addImage(cell, player, 'king');
    } else if (index === 4) {
        addImage(cell, player, 'queen');
    }
}

//function that creates the Chess Board 

function createChessBoard() {
    const table1 = document.createElement('table')
    document.body.appendChild(table1);
    let selectedCell = null;

    for (let i = 0; i < boardSize; i++) {
        const row = table1.insertRow();

        for (let j = 0; j < boardSize; j++) {
            const cell = row.insertCell();

            //function to declare each cell's id 1-8 a-h
            function nextChar(c) {
                return String.fromCharCode(c.charCodeAt(0) + j);
            }

            let idshow = cell.id = (8 - i) + nextChar('a');

            //var that shows the id of a cell inside it as text
            const idInnerText = document.getElementById(idshow).innerText = idshow;

            //coloring each cell -light/dark
            if ((i + j) % 2 == 0) {
                cell.className = "light-cell"
            } else {
                cell.className = "dark-cell"

            }


            cell.addEventListener("click", () => {
                if (selectedCell) selectedCell.classList.remove("selected");
                selectedCell = cell;
                cell.classList.add("selected");
            });
        }
    }
    pieces = getInitialBoard();

    for (let piece of pieces) {
        addImage(table1.rows[piece.row].cells[piece.col], piece.player, piece.type);
    }

}





window.addEventListener("load", createChessBoard);let chessContainer = document.getElementById("chessContainer")
for( let i=1; i<9; i++){
    let box1 = document.createElement('div')
    if (i % 2 == 0){
        box1.style.backgroundColor = 'black'    
      
}
else{
    box1.style.backgroundColor = "white"
}
chessContainer.appendChild(box1)
}

for(let i=1; i<9; i++){
    let box2 = document.createElement('div')
    if (i % 2 == 0){
        box2.style.backgroundColor = 'white'     
        
}
else{
    box2.style.backgroundColor = "black"
}
chessContainer.appendChild(box2)
}
for(let i=1; i<9; i++){
    let box3 = document.createElement('div')
    if (i % 2 == 0){
        box3.style.backgroundColor = 'black'    
}
else{
    box3.style.backgroundColor = "white"
}
chessContainer.appendChild(box3)
}
for(let i=1; i<9; i++){
    let box4 = document.createElement('div')
    if (i % 2 == 0){
        box4.style.backgroundColor = 'white'    
}
else{
    box4.style.backgroundColor = "black"
}
chessContainer.appendChild(box4)
}
for(let i=1; i<9; i++){
    let box5 = document.createElement('div')
    if (i % 2 == 0){
        box5.style.backgroundColor = 'black'    
}
else{
    box5.style.backgroundColor = "white"
}
chessContainer.appendChild(box5)
}
for(let i=1; i<9; i++){
    let box6 = document.createElement('div')
    if (i % 2 == 0){
        box6.style.backgroundColor = 'white'    
}
else{
    box6.style.backgroundColor = "black"
}
chessContainer.appendChild(box6)
}
for(let i=1; i<9; i++){
    let box7 = document.createElement('div')
    if (i % 2 == 0){
        box7.style.backgroundColor = 'black'    
}
else{
    box7.style.backgroundColor = "white"
}
chessContainer.appendChild(box7)
}
for(let i=1; i<9; i++){
    let box8 = document.createElement('div')
    if (i % 2 == 0){
        box8.style.backgroundColor = 'white'    
}
else{
    box8.style.backgroundColor = "black"
}
chessContainer.appendChild(box8)
}
