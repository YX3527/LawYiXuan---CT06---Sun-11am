// write your codes here



let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];

let attempts = 0;
let ranWord = "";
let textBox;
let button;
let textDis;

    function setup() {
        createCanvas(600, 400);

        textBox = createInput();
        textBox.position(width/2-textBox.width/2, 200);

        button = createButton('Guess');
        button.position(width/2+textBox.width/2 + textBox.width + 30, 200);
        button, mousePressed(display);
    }
    function draw() {
        background(220);
        textAlign(CENTER, CENTER)
        text("Guess the Word!", width/2, 50);
        text("Attempts: " + attempts);
        text("Hint: " + ranWord, width/2, 150);
        text(textDis, width/2, 250)
    }

    function display() {
        text = text
    }