// write your codes here

let words = ["javascript", "p5js", "canvas", "coding", "openai", "geometry", "sketch", "variable"];
let secretWord;
let guessedLetters = [];
let correctLetters = [];
let maxMistakes = 7;
let mistakes = 0;
let gameOver = false;

function setup() {
  createCanvas(800, 400);
  resetGame();
  textAlign(CENTER, CENTER);
}

function draw() {
  background(30, 30, 40);
  fill(255);
  textSize(40);
  text("Hidden Word Game", width / 2, 50);

  // Draw the hidden word with underscores
  textSize(48);
  let displayWord = "";
  for (let char of secretWord) {
    if (correctLetters.includes(char)) {
      displayWord += char.toUpperCase() + " ";
    } else {
      displayWord += "_ ";
    }
  }
  text(displayWord, width / 2, height / 2);

  // Show guessed letters
  textSize(20);
  text("Guessed: " + guessedLetters.join(" "), width / 2, height - 60);

  // Show mistakes
  text("Mistakes: " + mistakes + "/" + maxMistakes, width / 2, height - 30);

  // Check win/lose
  if (gameOver) {
    textSize(40);
    fill(mistakes >= maxMistakes ? color(255, 80, 80) : color(100, 255, 100));
    if (mistakes >= maxMistakes) {
      text("💀 Game Over! The word was: " + secretWord.toUpperCase(), width / 2, height / 2 + 80);
    } else {
      text("🎉 You Win! The word was: " + secretWord.toUpperCase(), width / 2, height / 2 + 80);
    }
    textSize(20);
    fill(255);
    text("Press R to restart", width / 2, height / 2 + 120);
  }
}

function keyPressed() {
  if (gameOver) {
    if (key === 'r' || key === 'R') resetGame();
    return;
  }

  let letter = key.toLowerCase();

  // Only handle letters
  if (letter.match(/[a-z]/) && !guessedLetters.includes(letter)) {
    guessedLetters.push(letter);

    if (secretWord.includes(letter)) {
      correctLetters.push(letter);
    } else {
      mistakes++;
    }
  }

  // Check if player won or lost
  if (mistakes >= maxMistakes) {
    gameOver = true;
  } else if (secretWord.split("").every(l => correctLetters.includes(l))) {
    gameOver = true;
  }
}

function resetGame() {
  secretWord = random(words);
  guessedLetters = [];
  correctLetters = [];
  mistakes = 0;
  gameOver = false;
}