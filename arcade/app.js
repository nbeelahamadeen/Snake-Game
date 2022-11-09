let table = document.querySelector('#snakeBoard');
let scoreDisplay = document.querySelector('#scoreDisplay');

//SNAKE components
let snake = [[10 , 10], [10 , 11]];
let nextDirection = [0 , 1];



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




function moveSnake(){    
for(let i = 0; i < snake.length;i++){
         let tail = snake[0];
         let x = tail[0];
         let y = tail[1];
         let postion = x + "-" + y;
         document.getElementById(postion).classList.remove('snake')
         snake[i][1]++;       
         console.log(tail)         
        }
    };

changeDirection();

function changeDirection(){
    for(let i = 0; i < snake.length;i++){
    let head = snake[snake.length-1];
    let headX = headX + snake[i][0];
    let headY = headY + snake[i][1];
    console.log(headX, headY)
    }
    //let direction = headX 
    
}

    // document.addEventListener('keydown', control);
    //   function control(ev){
    //     if(ev.keycode == 38 || ev.keycode == 87){

    //     }
    //   }  

setInterval(function(){
         moveSnake();
         drawSnake();
    },1000);



//Apple component
//produce random apple on the snakeboard where there isnt a snake
function randomApple(){
    let appleX = Math.ceil(Math.random() * 20);
    let appleY = Math.ceil(Math.random() * 20);
    let postion = appleX + "-" + appleY;
    if(drawSnake !== postion){
    document.getElementById(postion).classList.add('apple');
    }
}