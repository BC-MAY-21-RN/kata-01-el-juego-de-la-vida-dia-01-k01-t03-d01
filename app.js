class Celula {
    constructor(life, neighbors) {
        this.life = life;
        this.neighbors = neighbors;
    }

    getLife() {
        return this.life;
    }

    getNeighbors() {
        return this.neighbors;
    }

    setLife(life) {
        this.life=life;
    }

    setNeighbors(Neighbors) {
        this.neighbors= Neighbors;
    }

    toString() {
        //muerto
        if(this.life == 0) {
            return '.';
        } else {
            return '*';
        }
    }

};

let rows;
let columns;
let arrayCells;
let iteration = 0;

var resultArrayCell = '';
var resultNewArray = '';
var cell;
var newArray;


function getRows(){
    return rows;
}

function getColumns() {
    return columns;
}

function getArrayCell() {
    return resultArrayCell;
}
 
function random(){
    let state;
    return state;
}


function getNewArray() {
    return getNewArray;
}

function rules() {
    if ((cell.getLife()==1) && (cell.getNeighbors()<2)) {
        newArray[rows][columns].setLife(0); //underpopulation
    } else if ((cell.getLife()==1) && (cell.getNeighbors()>2)) {
        newArray[rows][columns].setLife(0); //overcrowding
    } else if ((cell.getLife()==1) && (cell.getNeighbors() == 2 || cell.getNeighbors() == 3)){
        //
    } else if ((cell.getLife()==0) && (cell.getNeighbors()==3)) {
        newArray[rows][columns].setLife(1); //revive
    } else {
        newArray[rows][columns] = cell;
    }
    
}
function initGame(){
    
    resultArrayCell = '';
    createArrayCell();
    
    for(let x = 0; x<rows; x++){
        for(let y=0; y<colmuns; y++){
            var randomv = Math.random();
            objecCell =  new objecCell();
            arrayCells[x][y] = objecCell;

        }
    }
}

// 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbours lives on to the next generation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell. s


