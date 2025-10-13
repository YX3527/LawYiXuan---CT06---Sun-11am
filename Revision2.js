let speed;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background('lightblue')

    if(x + diameter/2>width)
    noStroke();
     fill(280, 0, 0);
    circle(width/2, height/2, 40);
}

