let speedX;
let x = 300;
let diameter = 40;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background('lightblue')

    // if(x + diameter/2 >= width || x - diameter/2 <= 0) {
    //     speedX*=-1
    // }

    noStroke();
    fill(280, 0, 0);
    circle(x, height/2, 40);

    x +=speedX;
}
