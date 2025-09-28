// write your codes here

let x = 300;
let speed = 2;

 function setup() {
     createCanvas(600, 600);

     textSize(24)
     textAlign(LEFT);
 }
 function draw() {
    background(220)
 }
    fill(25, 5,5);
    text("BOUNCE !", x, height/2);

    x -=speed;

    if(x<=0 || x>=(width-580)) {
        speed*=-1;
        console.log(x)
    }