let player = document.getElementById("player");
let fallingObject = document.getElementById("fallingObject");
let scoreDisplay = document.getElementById("score");

let playerPosition = 130;
let fallingObjectPosition = { x: 150, y: 0 };
let score = 0;

// Move player with left and right arrow keys
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft" && playerPosition > 0) {
    playerPosition -= 10;
  } else if (event.key === "ArrowRight" && playerPosition < 260) {
    playerPosition += 10;
  }
  player.style.left = playerPosition + "px";
});

// Function to drop the object
function dropObject() {
  fallingObjectPosition.y += 5;
  fallingObject.style.top = fallingObjectPosition.y + "px";
  fallingObject.style.left = fallingObjectPosition.x + "px";

  // Check if the object reaches the player
  if (fallingObjectPosition.y >= 460 &&
      fallingObjectPosition.x >= playerPosition &&
      fallingObjectPosition.x <= playerPosition + 40) {
    score++;
    resetObject();
  }

  // Reset if object goes beyond the bottom
  if (fallingObjectPosition.y > 500) {
    resetObject();
  }

  scoreDisplay.innerHTML = "Score: " + score;
}

// Function to reset the falling object
function resetObject() {
  fallingObjectPosition.y = 0;
  fallingObjectPosition.x = Math.floor(Math.random() * 280);
}

// Run the game loop
setInterval(dropObject, 50);
