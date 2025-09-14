// write your codes here

// function setup(){
//     createCanvas(600, 600)
//     background(220)
//     fill(0, 200, 0)
// }
// function mouseMoved(){
//     circle(mouseX, mouseY, 50)
    //rect(mouseX, mouseY, 50, 50)
// }


// let shapeColor ='blue';
// let circleSize =5;
// function setup(){
//     createCanvas(400,400);
//     background(220);
//     noStroke();
// }
// function mousePressed(){
//     shapeColor= color(random(255), random(255),random(255))
//     circleSize =5;
// }
// function mouseDragged(){
//     fill(shapeColor);
//     ellipse(mouseX,mouseY, circleSize,circleSize);
//     circleSize += 0.5;
// }

// let rectResize =50;
// function setup(){
//     createCanvas(400, 400)
// }
// function draw(){
//     background(220);
//     let centerX = width/2;
//     let centerY = height/2;
//     let topLeftX = centerX -rectResize/2;
//     let topLeftY = centerY -rectResize/2;
//     rect(topLeftX, topLeftY, rectResize, rectResize);
// }



// function setup(){
//     createCanvas(400, 400)
//     background(220) 
//     noStroke()
// }
// function keyPressed(){
//     let count = floor(random(5, 21));
//     for(let i=0; i<count; i++){
//         //random size
//         let s = random(10, 80);
//         //random position
//         let x = random(s/2, width -s/2);
//         let y = random(s/2, height -s/2);
//         //random fill
//         fill(random(225), random(225), random(225));
//         //create circle
//         ellipse( x, y, s, s)
//     }
// }
// function keyReleased(){
//     background(220);
// }

// let a = 5;
// let b = "5"; 
// let c = 7;
// console.log(a===b);

// let showCircle = false;
// function setup(){
//     createCanvas(600, 600)
// }
// function draw(){
// background(220)
// if (showCircle){
// circle(width/2, height/2, 100);
// }
// }
// function keyPressed(){
//     if(key == 'c'){
//         showCircle = !showCircle;
//     }
// }

// function setup() {
//     createCanvas(200, 200); 
// }
// function draw(){
//     background(220);
//     if (key == 'c'){
//         circle(width/2, height/2, 50);
//     }
//     if (key == 't'){
//         triangle(width/2, height/2-25, width/2-25, height/2+25, width/2+25, height/2+25);
//     }
//     if (key == 's'){
//         rect(width/2-25, height/2-25, 50, 50);
//         //if want to be for a square:square(width/2-25, height/2-25,50)
//     }
// }


// function setup(){

// }
// function keyPressed(){
//     console.log("key:", key);
//     console.log("keyCode:", keyCode);
// }

// let shapeColor = 'blue';
// function setup() {
//     createCanvas(200, 200);
//      background(220);
// }
// function draw() {
//     background(220);
//     if(keyCode == 38) (
//             shapeColor = 'red';
//     )
//     if(keyCode == 40) (
//             shapeColor = 'black';
//     )

//     fill(shapeColor)
//     circle(width/2, height/2, 50);
// }


let shapeColor = 'blue';

function setup() {
    createCanvas(200, 200);
}

function draw() {
    background(220); 
    if(keyCode == 38) {
        shapeColor = 'red';
    }

    if(keyCode == 40) {
        shapeColor = 'black';
    }

    fill(shapeColor);
    circle(width/2, height/2, 50); 
}