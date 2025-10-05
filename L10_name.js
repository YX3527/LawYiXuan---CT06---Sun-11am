// write your codes here


function setup(){
    createCanvas(400, 400)
    textAlign(CENTER, CENTER);

    interval = setInterval(countdown)
}

function draw(){
    background(220);

    let s = 59-second()
    textSize(50);
    text(s, width/2, height/2);


}