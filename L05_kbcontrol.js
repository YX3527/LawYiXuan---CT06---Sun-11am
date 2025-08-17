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


let shapeColour = "blue"
let circleSize =5;
function setup(){
    createCanvas(400, 400)
    background(220)
    nostroke();
}
function mousePressed(){
    shapeColour= color(random(225), random(225), random(225))
    circleSize =5;
}
function mouseDragged(){
    FileList(shapeColor);
    e
}