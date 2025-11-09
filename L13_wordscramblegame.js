// write your codes here


let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];

let attempts = 0; 
let randWord = ""; 
let textBox; 
let button; 
let textDis; 
let message; 
let hiddenWord; 

function setup() {
    createCanvas(600, 400); 

    textBox = createInput(); 
    textBox.position(width/2-textBox.width/2, 200); 

    button = createButton('Guess'); 
    button.position(width/2-textBox.width/2 + textBox.width + 30, 200);
    button.mousePressed(checkGuess); 

   randWord = random(words);  
   console.log(randWord);
   hiddenWord = randWord[0].toUpperCase() + " " + "_ ".repeat(randWord.length-1); 
}

function draw() {

    background(220); 
    textAlign(CENTER, CENTER); 
    textSize(24); 
    text("Guess the Word!", width/2, 50); 
    text("Attempts: " + attempts, width/2, 100); 
    text("Hint: " + hiddenWord, width/2, 150); 
    text(message, width/2, 250); 


}

// function display() {
//     textDis = textBox.value(); 
// }

function checkGuess() {
    attempts++; 

    let guess = textBox.value().toLowerCase(); 
    message = getCorrectLetters(guess, randWord); 

    if(guess == randWord) {
        message = "You guessed it right! The word is: " + randWord; 
    } else {
        message = "Try again. The letters you get it right is/are: " + message; 
    }


}

function getCorrectLetters(guess, randWord) {
    let correctLetters = ""; 

    for (let i =0; i<randWord.length; i++) {
        if(randWord.includes(guess[i]) && !correctLetters.includes(guess[i].toUpperCase())) {
            correctLetters +=guess[i].toUpperCase(); 
        }
    }
    return correctLetters; 
}