// write your codes here

let player;
let gravity = 0.8;
let jumpForce = 15;
let onGround = false;
let obstacles = [];
let speed = 6;
let gameOver = false;
let score = 0;

function setup() {
  createCanvas(800, 400);
  resetGame();
}

function draw() {
  background(30, 30, 40);

  // Ground
  fill(60);
  rect(0, height - 50, width, 50);

  if (!gameOver) {
    // Apply gravity
    player.vy += gravity;
    player.y += player.vy;

    // Keep player on ground
    if (player.y + player.size > height - 50) {
      player.y = height - 50 - player.size;
      player.vy = 0;
      onGround = true;
    }

    // Move obstacles
    for (let obs of obstacles) {
      obs.x -= speed;
    }

    // Remove off-screen obstacles
    obstacles = obstacles.filter(obs => obs.x + obs.w > 0);

    // Spawn new obstacles
    if (frameCount % 90 === 0) {
      obstacles.push({
        x: width,
        y: height - 80,
        w: 20,
        h: 30
      });
    }

    // Collision detection
    for (let obs of obstacles) {
      if (
        player.x < obs.x + obs.w &&
        player.x + player.size > obs.x &&
        player.y + player.size > obs.y
      ) {
        gameOver = true;
      }
    }

    // Draw player
    fill(0, 200, 255);
    rect(player.x, player.y, player.size, player.size);

    // Draw obstacles
    fill(255, 100, 0);
    for (let obs of obstacles) {
      triangle(
        obs.x, obs.y + obs.h,
        obs.x + obs.w / 2, obs.y,
        obs.x + obs.w, obs.y + obs.h
      );
    }

    // Update score
    score += 1;
    fill(255);
    textSize(20);
    text("Score: " + score, 20, 30);

  } else {
    fill(255, 50, 50);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("Game Over!", width / 2, height / 2 - 20);
    textSize(20);
    text("Press R to restart", width / 2, height / 2 + 20);
  }
}

function keyPressed() {
  if ((key === ' ' || key === 'ArrowUp') && onGround && !gameOver) {
    player.vy = -jumpForce;
    onGround = false;
  }
  if (key === 'r' || key === 'R') {
    resetGame();
  }
}

function mousePressed() {
  if (onGround && !gameOver) {
    player.vy = -jumpForce;
    onGround = false;
  }
}

function resetGame() {
  player = {
    x: 100,
    y: height - 100,
    vy: 0,
    size: 30
  };
  obstacles = [];
  score = 0;
  gameOver = false;
}