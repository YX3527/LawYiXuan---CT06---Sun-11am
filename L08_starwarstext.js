let storyText = [
    "A long time ago in a galaxy far,",
    "far away...",
    "",
    "EPISODE I",
    "THE BEGINNING",
    "",
    "It is a period of learning...",
    "Students have begun their journey",
    "into the world of p5.js.",
    "With newfound powers, they",
    "create amazing visuals and",
    "animations...",
    "",
    "May the Code be with you!"
];

let yPos; 

function setup() {
    createCanvas(600, 600); 

    fill(255, 255, 0); 
    textSize(24);
    textAlign(CENTER); 

    yPos = height; 
}

function draw() {

    background(0); 

    //text("My favourite foods are: ", width/2, 50); 
    

    for (let i=0; i<storyText.length; i++) {
        text(storyText[i], width/2, yPos + i*50); 
    }

    // if(yPos < -(storyText.length*24 + (storyText.length-1)*24)) {
    //     yPos = height; 
    // }

    if(yPos < -650) {
        yPos = height; 
    }

    console.log(yPos); 

    yPos -=2; 

}