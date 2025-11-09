// write your codes here

// let player;
// let gravity = 0.8;
// let jumpForce = 15;
// let onGround = false;
// let obstacles = [];
// let speed = 6;
// let gameOver = false;
// let score = 0;

// function setup() {
//   createCanvas(800, 400);
//   resetGame();
// }

// function draw() {
//   background(30, 30, 40);

//   // Ground
//   fill(60);
//   rect(0, height - 50, width, 50);

//   if (!gameOver) {
//     // Apply gravity
//     player.vy += gravity;
//     player.y += player.vy;

//     // Keep player on ground
//     if (player.y + player.size > height - 50) {
//       player.y = height - 50 - player.size;
//       player.vy = 0;
//       onGround = true;
//     }

//     // Move obstacles
//     for (let obs of obstacles) {
//       obs.x -= speed;
//     }

//     // Remove off-screen obstacles
//     obstacles = obstacles.filter(obs => obs.x + obs.w > 0);

//     // Spawn new obstacles
//     if (frameCount % 90 === 0) {
//       obstacles.push({
//         x: width,
//         y: height - 80,
//         w: 20,
//         h: 30
//       });
//     }

//     // Collision detection
//     for (let obs of obstacles) {
//       if (
//         player.x < obs.x + obs.w &&
//         player.x + player.size > obs.x &&
//         player.y + player.size > obs.y
//       ) {
//         gameOver = true;
//       }
//     }

//     // Draw player
//     fill(0, 200, 255);
//     rect(player.x, player.y, player.size, player.size);

//     // Draw obstacles
//     fill(255, 100, 0);
//     for (let obs of obstacles) {
//       triangle(
//         obs.x, obs.y + obs.h,
//         obs.x + obs.w / 2, obs.y,
//         obs.x + obs.w, obs.y + obs.h
//       );
//     }

//     // Update score
//     score += 1;
//     fill(255);
//     textSize(20);
//     text("Score: " + score, 20, 30);

//   } else {
//     fill(255, 50, 50);
//     textSize(40);
//     textAlign(CENTER, CENTER);
//     text("Game Over!", width / 2, height / 2 - 20);
//     textSize(20);
//     text("Press R to restart", width / 2, height / 2 + 20);
//   }
// }

// function keyPressed() {
//   if ((key === ' ' || key === 'ArrowUp') && onGround && !gameOver) {
//     player.vy = -jumpForce;
//     onGround = false;
//   }
//   if (key === 'r' || key === 'R') {
//     resetGame();
//   }
// }

// function mousePressed() {
//   if (onGround && !gameOver) {
//     player.vy = -jumpForce;
//     onGround = false;
//   }
// }

// function resetGame() {
//   player = {
//     x: 100,
//     y: height - 100,
//     vy: 0,
//     size: 30
//   };
//   obstacles = [];
//   score = 0;
//   gameOver = false;
// }
///////////////////////////////////////////////////////////////////////////

let playerX = 100;
let playerY;
let playerSize = 30;
let velocity = 0;
let gravity = 0.8;
let jumpPower = -12;
let isGrounded = false;

let spikesX = [];
let spikeWidth = 20;
let spikeHeight = 30;
let spikeSpeed = 5;

let gameOver = false;
let gameStarted = false;
let score = 0;

let bgMusic, deathSound;
let musicStarted = false;

function preload() {
    bgMusic = loadSound('assets/BossaNova.mp3');
    deathSound = loadSound('assets/DunDunDunnn.mp3');
}

function setup() {
    createCanvas(600, 400);
    textAlign(CENTER, CENTER);
    playerY = height - playerSize;

    for (let i = 0; i < 3; i++) {
        spikesX.push(width + i * 300);
    }
}

function draw() {
    background(0);

    if (!gameStarted) {
        fill(255);
        textSize(32);
        text("Press SPACE to Start", width / 2, height / 2);
        return;
    }

    if (!musicStarted && !gameOver) {
        userStartAudio(); // Enables playback in browsers
        bgMusic.setLoop(true);
        bgMusic.play();
        musicStarted = true;
    }

    if (!gameOver) {
        // Gravity and jump logic
        velocity += gravity;
        playerY += velocity;

        if (playerY >= height - playerSize) {
            playerY = height - playerSize;
            isGrounded = true;
            velocity = 0;
        } else {
            isGrounded = false;
        }

        // Draw player
        fill(0, 255, 0);
        rect(playerX, playerY, playerSize, playerSize);

        // Move and draw spikes
        fill(255, 0, 0);
        for (let i = 0; i < spikesX.length; i++) {
            spikesX[i] -= spikeSpeed;

            if (spikesX[i] < -spikeWidth) {
                spikesX[i] = width + random(100, 300);
                score++; // Add to score when a spike is avoided
            }

            triangle(spikesX[i], height, spikesX[i] + spikeWidth / 2, height - spikeHeight, spikesX[i] + spikeWidth, height);

            // Collision detection
            if (
                playerX + playerSize > spikesX[i] &&
                playerX < spikesX[i] + spikeWidth &&
                playerY + playerSize > height - spikeHeight
            ) {
                gameOver = true;
                deathSound.play();
                bgMusic.stop();
            }
        }

        fill(255);
        textSize(20);
        text("Press SPACE to jump", width / 2, 30);
        text("Score: " + score, width / 2, 60);

    } else {
        fill(255, 0, 0);
        textSize(32);
        text("Game Over!", width / 2, height / 2 - 20);
        textSize(20);
        text("Final Score: " + score, width / 2, height / 2 + 10);
        text("Press R to restart", width / 2, height / 2 + 40);
    }
}

function keyPressed() {
    if (!gameStarted && key === ' ') {
        gameStarted = true;
        return;
    }

    if (key === ' ' && isGrounded && !gameOver) {
        velocity = jumpPower;
    }

    if ((key === 'r' || key === 'R') && gameOver) {
        restartGame();
    }
}

function restartGame() {
    playerY = height - playerSize;
    velocity = 0;
    spikesX = [];
    for (let i = 0; i < 3; i++) {
        spikesX.push(width + i * 300);
    }
    gameOver = false;
    score = 0;
    bgMusic.play();
}
