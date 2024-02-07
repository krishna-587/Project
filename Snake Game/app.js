


let canvas = document.querySelector('canvas');
let cxt = canvas.getContext('2d');

let cellSize = 50;  // height and width ka kaam krega for each cell
let boardHeight = 600;
let boardWidth = 1000;
let snakeCells = [[0,0]];  // 2d array -> to store starting points of snake's rectangle
let direction = 'right';    // given by default
let gameOver = false; //wall se touch hone pr true hoga


let foodCell = generateFood();       // becoz we need x and y for food

let score = 0;

// for repetition
let intervalId = setInterval(()=>{        //jb setInterval chalta hai tb ek id(number) return krta hai , usse store kr liya
    update();
    draw();
} , 150)

// keydown event
document.addEventListener('keydown' , function(event){
    if(event.key === 'ArrowDown'){
        direction = 'down'
    }
    else if(event.key === 'ArrowUp'){
        direction = 'up'
    }
    else if(event.key === 'ArrowLeft'){
        direction = 'left'
    }
    else{
        direction = 'right' 
    }
})



// function to draw snake
function draw(){
    if(gameOver === true){
        clearInterval(intervalId);      //method to stop setInternal
        cxt.fillStyle = 'white';
        cxt.font = '50px monospace'
        cxt.fillText('GAME OVER !!' , 350 , 300)
        return;
    }

    // draw snake
    cxt.clearRect(0,0,boardWidth,boardHeight);    // to clear
    for(let cell of snakeCells){
        cxt.fillStyle = 'red';
        cxt.fillRect(cell[0] , cell[1] , cellSize , cellSize);
        cxt.strokeStyle = 'orange';
        cxt.strokeRect(cell[0] , cell[1] , cellSize , cellSize);
    }

    // draw food
    cxt.fillStyle = 'green';
    cxt.fillRect(foodCell[0] , foodCell[1] , cellSize , cellSize);
    
    // draw score
    cxt.font = '24px monspace';
    cxt.fillText(`Score : ${score}` , 20 , 30);
}


//function to update snake
function update(){
    let headX = snakeCells[snakeCells.length-1][0]
    let headY = snakeCells[snakeCells.length-1][1]
    
    // let newHeadX = headX + cellSize;
    // let newHeadY = headY;

    let newHeadX;
    let newHeadY;

    //right key change
    if(direction === 'right'){
        newHeadX = headX + cellSize;
        newHeadY = headY;
        if(newHeadX === boardWidth || collision(newHeadX,newHeadY)){
            gameOver = true
        }
    }
    
    // left key change
    else if(direction === 'left'){
        newHeadX = headX - cellSize;
        newHeadY = headY;
        if(newHeadX < 0 || collision(newHeadX,newHeadY)){
            gameOver = true
        }
    }

    // up key change
    else if(direction === 'up'){
        newHeadX = headX;
        newHeadY = headY - cellSize;
        if(newHeadY < 0 || collision(newHeadX,newHeadY)){
            gameOver = true;
        }
    }


    else{
        newHeadX = headX;
        newHeadY = headY + cellSize;
        if(newHeadY === boardHeight || collision(newHeadX,newHeadY)){
            gameOver = true;
        }
    }

    snakeCells.push([newHeadX , newHeadY]);

    
    
    if(newHeadX === foodCell[0] && newHeadY === foodCell[1]){
        foodCell = generateFood();
        score++;
    }
    else{

    snakeCells.shift();              // aage se 1 remove kr dega
    }
}



function generateFood(){
    return [
        Math.round((Math.random() * (boardWidth - cellSize)) / cellSize) * cellSize ,
        Math.round((Math.random() * (boardHeight - cellSize)) / cellSize) * cellSize
    ]
}

function collision(newHeadX , newHeadY){
    for(let item of snakeCells){
        if(item[0] === newHeadX && item[1] === newHeadY){
            return true;
        }
    }
    return false;
}