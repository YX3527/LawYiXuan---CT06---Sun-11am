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


/////////////////////////////////////////////////////////////////////////////////

// let interval;
// let countdown = 5;

// function setup(){
//     createCanvas(600, 400);
//     textAlign(CENTER, CENTER);
// }

// function draw(){
//     background(220);

//     textSize(24);
//     text('Click to start timer', width/2, height-50);

//     textSize(100)
//     text(countdown, width/2, height/2);
// }

// function mousePressed(){
//     interval = setInterval(countdownUpdate, 1000)
// }

// function countdownUpdate(){
//     if(countdown > 0){
//         countdown -= 1;
//     } else(
//         clearInterval(interval)
//     )
// }



///////////////////////////////////////////////////////////////////////////////////////////////////


let interval;
let countdown = 5;
let diff;
let bgColor = 220;
let sound;

function preload(){
    sound = loadSound('assets/bossaNova.mp3');
}
function setup(){
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
}

function draw(){
    background(bgColor);

    textSize(24);
    text('Click to start timer', width/2, height-50);

    textSize(100)
    text(countdown, width/2, height/2);
}

function mousePressed(){
    interval = setInterval(countdownUpdate, 1000)
}

function countdownUpdate(){
    if(countdown > 0){
        countdown -= 1;
    } else {
        clearInterval(interval);
        diff = setInterval(changeVar, 500);
    }
}
function changeVar(){
    bgColor = color(random(255), random(225), random(225));
    sound.play();
}

function keyPressed() {
    if(keyCode==32) {
        clearInterval(diff);
        sound.stop();
    }
}

