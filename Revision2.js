let speedX=2;
let x = 300;
let diameter = 40;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background('lightblue')

    if(x + diameter/2 >= width || x - diameter/2 <= 0) {
        speedX*=-1
    }

    noStroke();
    fill(280, 0, 0);
    circle(x, height/2, 40);

    x +=speedX;
}


////////////////////////////////////////////////////////////////////////////

let arr = ["apple", "orange", "banana", "mango" ]; 

function setup() {
    createCanvas(400, 400)
}
    function draw() {
    background(0);
        
     fill('yellow')
     textSize(24);
     textAllign(CENTER);

     
    }
fill('yellow')
textSize(24)