// write your codes here



let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];

let attempts = 0;
let ranWord = "";
let textBox;
let button;

    function setup() {
        createCanvas(600, 400);

        textBox = createInput();
        textBox.position(width/2-textBox)
    }
    function draw() {
        text("Guess the Word!", width/2, 50);
        text("Attempts: " + attempts);
        text()
    }