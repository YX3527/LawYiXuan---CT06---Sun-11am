// write your codes here

// recap 
// let x = 300; 
// let speed = 2; 

// function setup() {
//     createCanvas(600, 600); 

//     textSize(24); 
//     textAlign(LEFT); 

// }

// function draw() {
//     background(220); 

//     text("Bounce!", x, height/2); 

//     x +=speed; 

    // if(x<=0 || x>= (width-4*24)) {
    //     speed *=-1; 
    // }

//     if(x<=0 || x>= 511) {
//         speed *=-1; 
//     }
//     console.log(x); 

// }


// function setup(){
//     createCanvas(600, 400)
//     textAlign(CENTER, CENTER);
// }
// function draw(){
//     background(220);

//     let h = hour();
//     let m = minute();
//     let s = second();

//     let timeString = nf(h,2) + ":" + nf(m,2) + ":" + nf(s,2);
//     textSize(72)
//     fill(0);
//     text(timeString, width / 2, height / 2);
// }


let interval;
let countdown = 5;

function setup(){
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
}

function draw(){
    background(220);

    textSize(24);
    text('Click to start timer'), width / 2, height / 2
}