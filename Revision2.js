let speedX;
let X = 300;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background('lightblue')

    if(x + diameter/2>width || x - diameter/2 < 0)
        speedX*=-1
}
    noStroke();
     fill(280, 0, 0);
    circle(width/2, height/2, 40);

    x +=speedX;

