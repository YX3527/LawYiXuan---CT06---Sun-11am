// write your codes here

// let x = 300;
// let y = 200; 
// let size = 30; 
// let speedX = 1; 
// let shapeColor = 'blue';

// function setup() {
//     createCanvas(600, 400);
// }
// function draw() {
//     background(220)

//     if(x<=0 || x>=width-size) {
//         speedX *=-1;
//         shapeColor = color(random(255), random(255), random(255));
//     }
//     x +=speedX;
//     fill(shapeColor);
//     noStroke();
//     rect(x, y, size, size);
// }






// function setup() {
//     createCanvas(400, 400);
//     background(220)

//     fill(25, 5,5);
//     text("My name is Yi Xuan", 50, 50);
//     textSize(16);
//     fill(25, 5, 5)
//     text("My age is 12345678910", 50, 100)
//     text("My favouritee activity is sleeping", 50, 150)

    
// }




// let favouriteFoods=["Pizza", "Burger", "Sushi", "Tacos","Pasta"];
// function setup (){
//     createCanvas(400, 400)
//     textSize(24);
//     textAlign(LEFT, TOP)
// }
// function draw (){
//     background(220)

//     fill(0);
//     text("My Favourite Foods:", 50, 50)

//     for(let i = 0;i<favouriteFoods.length;i++) {
//         text((i+1)+ "." + favouriteFoods[i], 50, 80 + i*30);
//     }
// }





let favouriteFoods=["Pizza", "Burger", "Sushi", "Tacos","Pasta"];
function setup (){
    createCanvas(600, 600)

    fill(255, 255, 0);
    textSize(24);
    textAlign(CENTRE)

    yPos=innerHeight;
}
function draw (){
    background(220)

    text("My Favourite Foods:", 50, 50)

    for(let i = 0;i<favouriteFoods.length;i++) {
        text((i+1)+ "." + favouriteFoods[i], 50, 80 + i*30);
    }
}
