let table = document.querySelector('#snakeBoard');
let score = document.querySelector('#scoreDisplay');

//SNAKE components
let snake = [[10 , 10]];
let nextDirection = [1 , 0];
let points = 0;
let applePosition = 0;
let lastPostion = [0, 0];

//refershes the screen and creates the moving
let interval = setInterval(function(){
    removeSnake();
    moveSnake();
    drawSnake();
    eatApple();
},250);


//creation of cellID
for(let x = 0; x < 21; x++){
    let row = document.createElement('tr');
    table.appendChild(row);
    for(let y = 0; y < 21; y++){
        let cell = document.createElement('td');
        cell.className = 'cell';
        cell.id = x + '-' + y;
        row.appendChild(cell);
    }
}

// create apple in random spot
randomApple();



//draws a snake on the snakeboard
function drawSnake(){
    for(let i = 0; i < snake.length; i++){
        let snakePostition = snake[i];
        let x = snakePostition[0];
        let y = snakePostition[1];
        let postion = x + "-" + y;
        document.getElementById(postion).classList.add('snake');
    }
}

//This function loops through the snake
function moveSnake(){
    let head = snake[snake.length -1];
    let nextHead = [head[0] + nextDirection[0] , head[1] + nextDirection[1]];
    console.log(nextHead);
    if(nextHead[0] < 0 || nextHead[0] >= 21){
        score.innerText = 'GAME OVER! Your score was ' + points;
        clearInterval(interval);
    }else if(nextHead[1] < 0 || nextHead[1] >= 21){
        score.innerText = 'GAME OVER! Your score was ' + points;
        clearInterval(interval);
    }else if(partOfSnake(nextHead)){
        score.innerText = 'GAME OVER! Your score was ' + points;
        clearInterval(interval);
    }
    snake.push(nextHead);
    lastPostion = snake.shift(snake);
    console.log(lastPostion);
}

function removeSnake(){
    for(let i = 0; i < snake.length;i++){
        let body = snake[i];
        let y = body[0];
        let x = body[1];
        let postion = y + "-" + x;
        document.getElementById(postion).classList.remove('snake')
    }
}

function growBody(){
    snake.unshift(lastPostion);
}

function partOfSnake(applePosition){
    for(let i = 0; i < snake.length;i++){
        let body = snake[i];
        if(applePosition[0] == body[0] && applePosition[1] == body[1]){
            return true;
        }
    }   
    return false;
}


    window.addEventListener('keydown', control);
      function control(event){
        //move up/W
        if(event.keyCode === 38 || event.keyCode === 87)
        {           
        nextDirection = [-1,0];
        //move down/S
        } else if(event.keyCode === 40 || event.keyCode === 83){
            nextDirection = [1,0];
        //move left/A 
        } else if(event.keyCode === 37 || event.keyCode === 65){
            nextDirection = [0,-1];
        //move right/D
        } else if(event.keyCode === 39 || event.keyCode === 68){
            nextDirection = [0,1];
        }
      }  


//Apple component
//produce random apple on the snakeboard where there isnt a snake
function randomApple(){
    let appleX = Math.ceil(Math.random() * 20);
    let appleY = Math.ceil(Math.random() * 20);
    
    while(partOfSnake([appleX, appleY])){
        appleX = Math.ceil(Math.random() * 20);
        appleY = Math.ceil(Math.random() * 20);
        
    }
    applePosition = appleX + "-" + appleY;
    document.getElementById(applePosition).classList.add('apple');

}

function eatApple(){
    for(let i = 0; i < snake.length;i++){
    let snakePostition = snake[i];
       let x = snakePostition[0];
       let y = snakePostition[1];
       let head = x + "-" + y;
       if(head === applePosition){
        document.getElementById(head).classList.remove('apple');
        points++;
        score.innerText = "score "+ points;
        growBody();
        randomApple();        
        }
    }   
}