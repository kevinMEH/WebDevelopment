let score = 0;
let userGuess;
let turnsLeft;
let code;

reset();

function update() {
  document.getElementById("turnsLeft").innerText = turnsLeft;
  document.getElementById("userGuess").innerText = userGuess;
}

function initializeCode() {
  let numbers = [1, 2, 3];
  let result = "";
  for (let i = 0; i < 3; i++) {
    result = result + numbers[Math.floor(Math.random() * numbers.length)];
  }
  console.log(result);
  return result;
}

function reset() {
  document.getElementById("popup").style.display = "none";

  userGuess = "";
  turnsLeft = 7;
  code = initializeCode();

  resetLogs();
  update();
  updateScore();
}

function tryCode() {
  update();
  if (userGuess.length === 3) {
    if (userGuess == code) {
      console.log("User is correct");
      won();
    } else {
      incorrect();
    }
  }
}

function won() {
  score = score + turnsLeft;
  document.getElementById("popupText").innerText = "You won!";
  document.getElementById("popup").style.display = "block";
  updateScore();
}

function lose() {
  score = 0;
  document.getElementById("popupText").innerText = "You lost!";
  document.getElementById("popup").style.display = "block";
  updateScore();
}

function incorrect() {
  if (--turnsLeft === 0) {
    lose();
  }
  let userGuessNum = userGuess - 0;
  let codeNum = code - 0;
  if (userGuessNum < codeNum)
    addToLog(userGuess + " is too low!");
  else
    addToLog(userGuess + " is too high!");
  userGuess = "";

  randomEvent();

  update();
}

function randomEvent() {
  let random = Math.random();
  if(random < 0.1) {
    turnsLeft++;
    addToLog("A traffic jam delayed the cops! +1 turns!");
  }
  if(random > 0.9) {
    turnsLeft--;
    addToLog("The cops are bring in helicopters! Better act fast! -1 turns!");
  }
}

function updateScore() {
  document.getElementById("currentScoreMain").innerText = score;
  document.getElementById("currentScoreEnd").innerText = score;
}

function addToLog(text) {
  document.getElementById("hint").innerText += text + "\n";
}

function resetLogs() {
  document.getElementById("hint").innerText = "";
}
