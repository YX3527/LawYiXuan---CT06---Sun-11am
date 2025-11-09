// let words = [
//     "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
//     "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
//     "pineapple", "furniture", "telephone", "lighthouse"];

// let attempts = 0; 
// let randWord = ""; 
// let textBox; 
// let button; 
// let textDis; 
// let message; 
// let hiddenWord; 
// let score = 0; 
// let button2; 

// function setup() {
//     createCanvas(600, 400); 

//     textBox = createInput(); 
//     textBox.position(width/2-textBox.width/2, 200); 

//     button = createButton('Submit'); 
//     button.position(width/2-textBox.width/2 + textBox.width + 30, 200);
//     button.mousePressed(checkGuess); 

//     button2 = createButton('Rescramble'); 
//     button2.position(textBox.x - button2.width - 30, 200);
//     button2.mousePressed(scrambleWord); 


//    //hiddenWord = randWord[0].toUpperCase() + " " + "_ ".repeat(randWord.length-1); 
// }

// function draw() {

//     background(220); 
//     textAlign(CENTER, CENTER); 
//     textSize(24); 
//     text("Word Scramble Game!", width/2, 50); 
//     text("Scores: " + score, width/2, 100); 
//     text("Scrambled Word: " + hiddenWord, width/2, 150); 
//     text(message, width/2, 250); 


// }

// // function display() {
// //     textDis = textBox.value(); 
// // }

// function checkGuess() {
//     attempts++; 

//     let guess = textBox.value().toLowerCase(); 
//     message = getCorrectLetters(guess, randWord); 

//     if(guess == randWord) {
//         message = "You guessed it right! The word is: " + randWord; 
//     } else {
//         message = "Try again. The letters you get it right is/are: " + message; 
//     }


// }

// function getCorrectLetters(guess, randWord) {
//     let correctLetters = ""; 

//     for (let i =0; i<randWord.length; i++) {
//         if(randWord.includes(guess[i]) && !correctLetters.includes(guess[i].toUpperCase())) {
//             correctLetters +=guess[i].toUpperCase(); 
//         }
//     }
//     return correctLetters; 
// }

// function scrambleWord(word) {
//      let arr = words.split(''); 

//      for (let i=arr.length; i<0; i--) {
//         let j = floor(random(i+1));
//         [arr[i], arr[i]] = [arr[j], arr[i]];
//      }
//     return arr.join('');
// }
// function pickNewWord() {
//    randWord = random(words);  
//    console.log(randWord);
// }

//////////////////////////////////////////////////////////

let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];

let hiddenWord, scrambledWord;
let inputBox, submitButton, scrambleButton;
let message = "";
let attempts = 0;
let score = 0;
let streak = 0;
let maxStreak = 0;
let newRound = false;

let correctSound, wrongSound, streakResetSound;

function preload() {
    correctSound = loadSound('assets/Win.mp3'); // Replace with actual file path
    wrongSound = loadSound('assets/Lose.mp3'); // Replace with actual file path
    streakResetSound = loadSound('assets/DunDunDunnn.mp3'); // Replace with actual file path
}

function setup() {
    createCanvas(600, 400);
    textSize(24);
    textAlign(CENTER, CENTER);

    pickNewWord();

    // Create input field
    inputBox = createInput();
    inputBox.size(150, 30);
    inputBox.style("font-size", "20px");
    inputBox.position(width / 2 - 80, height / 2 + 20);

    // Create submit button
    submitButton = createButton("Submit");
    submitButton.position(width / 2 + 100, height / 2 + 23);
    submitButton.size(150, 30);
    submitButton.style("font-size", "20px");
    submitButton.mousePressed(checkGuess);

    // create scramble again button
    scrambleButton = createButton("Rescramble");
    scrambleButton.position(width/2 -250, height / 2 +23);
    scrambleButton.size(150,30);
    scrambleButton.style("font-size", "20px");
    scrambleButton.mousePressed(scrambleAgain);    
}

function draw() {
    background(220);

    fill(0);
    text("Word Scramble Game!", width / 2, height / 6);
    text("Scrambled Word: " + scrambledWord.toUpperCase(), width / 2, height / 4+50);
    text("Score: " + score, width / 2, height - 100);
    text("Streak: " + streak + " (Max: " + maxStreak + ")", width / 2, height - 70);
    text(message, width / 2, height - 40);
}

function pickNewWord() {
    hiddenWord = random(words);
    scrambledWord = shuffleWord(hiddenWord);
}

function shuffleWord(word) {
    let arr = word.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        let j = floor(random(i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

function scrambleAgain(){
    scrambledWord = shuffleWord(hiddenWord);
    streakResetSound.play();
}

function checkGuess() {
    let guess = inputBox.value().toLowerCase();
    attempts++;

    if (guess === hiddenWord) {
        message = "Correct! Moving to next word!";
        hidx = words.indexOf(hiddenWord)
        words.splice(hidx, 1)
        score++;
        if (attempts === 1) {
            streak++;
            maxStreak = max(streak, maxStreak);
        } else {
            streak = 0;
            // streakResetSound.play();
        }
        correctSound.play();
        attempts = 0;
        inputBox.value(""); // Clear input field
        pickNewWord(); // Signal draw() to pick a new word
    } else {
        message = "Incorrect! Try again!";
        streak = 0
        wrongSound.play();
    }
}
