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
let score = 0; 
let button2; 

function setup() {
    createCanvas(600, 400); 

    textBox = createInput(); 
    textBox.position(width/2-textBox.width/2, 200); 

    button = createButton('Submit'); 
    button.position(width/2-textBox.width/2 + textBox.width + 30, 200);
    button.mousePressed(checkGuess); 

    button2 = createButton('Rescramble'); 
    button2.position(textBox.x - button2.width - 30, 200);
    button2.mousePressed(scrambleWord); 

   randWord = random(words);  
   console.log(randWord);
   //hiddenWord = randWord[0].toUpperCase() + " " + "_ ".repeat(randWord.length-1); 
}

function draw() {

    background(220); 
    textAlign(CENTER, CENTER); 
    textSize(24); 
    text("Word Scramble Game!", width/2, 50); 
    text("Scores: " + score, width/2, 100); 
    text("Scrambled Word: " + hiddenWord, width/2, 150); 
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

function scrambleWord() {
  
}