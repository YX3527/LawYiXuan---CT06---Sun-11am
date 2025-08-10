// write your codes here


// function setup(){
//     createCanvas(600, 600)
//     background(220)
// }

// function draw(){
//     for(let i=0; i<5; i++){
//         fill(0, 0, i*50)
//         circle(50 + i*50, 50 + i*50, 50)
//     }
// }

// let shapeColour = 'blue';

// function setup(){
//     createCanvas(600, 600);
//     background(220);
// }

// function draw(){
//     fill(shapeColour);
//     circle(width/2, height/2, 100);
// }

// function mousePressed(){
//     shapeColour = 'pink'; 
// }

// function mouseReleased(){
//     shapeColour = 'purple';
// 


let shapeColour = 'blue';

function setup(){
    createCanvas(600, 600);
    background(220);
}

function draw(){
    fill(shapeColour);
    circle(width/2, height/2, 100);
}

function mousePressed(){
    shapeColour = 'pink'; 
}

function mouseReleased(){
    shapeColour = colour(random(255), random(255), random(255))
}