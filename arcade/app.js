let table = document.querySelector('#snakeBoard');
let scoreDisplay = document.querySelector('#scoreDisplay');

//SNAKE components
let snake = [[10 , 10]];
let nextDirection = [1 , 0];
let head = 0;



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

drawSnake();
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



//moves snake and removes the tail
function moveSnake(){    
for(let i = 0; i < snake.length;i++){
         let body = snake[i];
         console.log(body)
         let y = body[0];
         let x = body[1];
         let postion = y + "-" + x;
         document.getElementById(postion).classList.remove('snake')
         let newY = nextDirection[0]; 
         let newX = nextDirection[1]; 
         body[0] = body[0] + newY;
         body[1] = body[1] + newX;
        
        }
    };

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

//     changeDirection();

// function changeDirection(){
//     for(let i = 0; i < snake.length;i++){
//     let snakePostition = snake[i];
//        let x = snakePostition[0];
//        let y = snakePostition[1];
//        let head = x + "-" + y;
//        console.log(head)
//     }   
// }

setInterval(function(){
         moveSnake();
         drawSnake();
         //changeDirection();
    },300);



//Apple component
//produce random apple on the snakeboard where there isnt a snake
function randomApple(){
    let appleX = Math.ceil(Math.random() * 20);
    let appleY = Math.ceil(Math.random() * 20);
    let postion = appleX + "-" + appleY;
    if(snake !== postion){
    document.getElementById(postion).classList.add('apple');
    }
}