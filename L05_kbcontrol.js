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

let rectResize =50
function setup(){
    createCanvas(400, 400)
}
function draw(){
    background(220);     
    let centerX = width/2;
    let centerY = height/2;
    let topLeftX = centerX -rectSize/2
    let topLeftY = centerY -rectSize/2
    rectResize(topLeftX, topLeftY, rectSize, rectSize)
}