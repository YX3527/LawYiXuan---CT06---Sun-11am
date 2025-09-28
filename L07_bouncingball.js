
 // write your codes here
// let x=200;
// let y=200;
// let speed= 2;
// function setup() {
//     createCanvas(400, 400);}
// function draw(){
//      background(220);
//      //constrain within the canvas
//      x = constrain(x, 25, width-25);
//      y = constrain(y, 25, height-25)
//     if(keyIsDown(RIGHT_ARROW)){
//         x +=2 ;
//     }if(keyIsDown(LEFT_ARROW)){
//         x -=2;
//     }
//     if(keyIsDown(UP_ARROW))
//         y-=2;
//     if(keyIsDown(DOWN_ARROW))
//         y+= 2;
//     circle(x, y, 50)
// }

//const { jsx } = require("react/jsx-runtime");








// let staticImage;
// let soundEffect; 
// let x = 200;
// let y = 200; 
// let speed = 2; 
// let imgwidth = 80;
// let imgheight = 80; 

// function preload() {
//     staticImage = loadImage('assets/pico-a.png'); 
//     soundEffect = loadSound('assets/pop.mp3'); 
// }

// function setup() {
//     createCanvas(400, 400); 
// }

// function draw() {
//     background('lightblue'); 

//     x = constrain(x, 0, width-imgwidth); 
//     y = constrain(y, 0, height-imgheight); 

//     if(keyIsDown(RIGHT_ARROW)) {
//         x += speed; 
//     }
//     if(keyIsDown(LEFT_ARROW)) {
//         x -= speed; 
//     }
//     if(keyIsDown(UP_ARROW)) {
//         y -= 2; 
//     }
//     if(keyIsDown(DOWN_ARROW)) {
//         y += 2; 
//     }

//     image(staticImage, x, y, imgwidth, imgheight);
// }

// function keyPressed(){
//     if(keyCode == 32){
//         imgwidth = 40;
//         soundEffect.play();
//     }
// }
// function keyReleased(){
//     imgwidth = 80;
//     soundEffect.pause();
// }






//  let x = 300;
//  let y = 200;
//  let size = 30;
//  let speedX = 1;
//  let speedY = 1;

// function setup() {
//     createCanvas(600, 400); 
//  }


// function draw(){
//     background(220);
//     if(x+size/2<=0  ||  x-size/2>=width)   {
//         speedX *=-1;
//     }
//     if(y-size/2<=0  ||  y+size/2>=height)   {
//         speedY *=-1;
//     }
//     x += speedX;
//     y += speedY;
//     noStroke();
//     circle(x, y, size);
//  }

/////////////////////////////////////////////////////////////////////

let x = 300;
let y = 200; 
let size = 30; 
let speedX = 1; 
let speedY = 1; 
let shapeColor = 'blue';

function setup() {
    createCanvas(600, 400); 
    background(220); 
    
}

function draw() {
    //background(220); 

    if(x-size/2<=0 || x+size/2>=width) {
        speedX *=-1; 
        shapeColor=color (random(255), random(255), random(255));

    }
    if(y-size/2<=0 || y+size/2>=height) {
        speedY *=-1; 
        shapeColor = color(random(255), random(255), random(255));
    }


    x += speedX;
    y += speedY; 

    noStroke(); 
    fill(shapeColor); 
    circle(x, y, size);
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        speedX *=1.2; 
        speedY *=1.2; 
    }
    if(keyCode === DOWN_ARROW) {
        speedX *=0.8; 
        speedY *=0.8; 

    }
    
}