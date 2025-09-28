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
    

    for (let i=0; i<favFoods.length; i++) {
        text((i+1) + "." + favFoods[i], width/2, yPos + i*50); 
    }

    yPos -=1}
