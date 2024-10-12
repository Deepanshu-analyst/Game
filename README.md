<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Catch the Falling Objects Game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="gameContainer">
    <div id="player"></div>
    <div id="fallingObject"></div>
    <div id="score">Score: 0</div>
  </div>

  <script src="script.js"></script>
</body>
</html>
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

#gameContainer {
  position: relative;
  width: 300px;
  height: 500px;
  border: 2px solid #000;
  background-color: #fff;
  overflow: hidden;
}

#player {
  position: absolute;
  bottom: 0;
  left: 130px;
  width: 40px;
  height: 40px;
  background-color: blue;
}

#fallingObject {
  position: absolute;
  top: 0;
  left: 150px;
  width: 20px;
  height: 20px;
  background-color: red;
}

#score {
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #000;
}
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
