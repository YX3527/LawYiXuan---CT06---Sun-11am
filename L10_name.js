// write your codes here

// let interval;
// let bgColor = 220;
// function setup(){
//     createCanvas(400, 400)
//     textAlign(CENTER, CENTER);

//     interval = setInterval(countdown, 1000);

// }

// function draw(){
//     background(bgColor);

//     let s = 59-second()
//     textSize(50);
//     text(s, width/2, height/2);


// }

// function countdown(){
//     bgColor = color(random(225), random(255), random(255));

// }

///////////////////////////////////////////////////////////////

let inputText;
let userText;

function setup() {
    createCanvas(600, 400);


    inputText - createInput();
    inputText.postion(width/2, height-100);
    inputText.input(updateText); 
    inputText.size(150, 30);
}

function draw() {
    background(220);

    Text('Enter text here', 50, height-80);
    Text(user)
}