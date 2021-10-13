let boxes = document.getElementsByClassName("flipbox");

let backImages = []; // Stores all the back images. The index is the id.
let moves = 0;
let imagesLeft = 16;

let flipped = false;
let lastBox;
let lastShape = "";

function reset() {
    backImages = [];
    moves = 0;
    imagesLeft = 16;
    flipped = false;
    
    genBoxes();
    
    for(let box of boxes) {
        if(box.classList.contains("hover")) box.classList.toggle("hover");
        box.addEventListener("click", flip);
    }
    
    document.getElementById("mainPage").style.display = "block";
    document.getElementById("winScreen").style.display = "none";
    document.getElementById("loseScreen").style.display = "none";
    
    soldierSay("You may now begin, player 222.");
}

const pop = new Audio("Assets/Pop.mp3");
pop.volume = 0.6;

function flip(event) {
    // lmao
    let currentBox = event.target.parentElement.parentElement.parentElement;
    let imageId = event.target.parentElement.parentElement.children[1].children[0].id;
    let currentShape = backImages[imageId];

    currentBox.classList.toggle("hover");
    pop.play();

    if(flipped) {
        moves++;
        if(currentBox != lastBox && currentShape === lastShape) {
            currentBox.removeEventListener("click", flip);
            lastBox.removeEventListener("click", flip);
            imagesLeft -= 2;
        } else {
            // Temp local variables, fixes bug
            let tempCurrentBox = currentBox;
            let tempLastBox = lastBox; 
            setTimeout(() => {
                tempCurrentBox.classList.toggle("hover");
                tempLastBox.classList.toggle("hover");
            }, 800); // 0.8 second delay before unhovering
        }
        flipped = false;
        
        if(moves == 12) {
            soldierSay("The grace period is now over.")
            setTimeout(() => soldierSay("We will start eliminating players."), 4000);
        }
    } else {
        flipped = true;
        lastShape = backImages[imageId];
        lastBox = currentBox;
    }
    
    checkWin();
}

function checkWin() {
    document.getElementById("moves").innerHTML = moves;
    if(imagesLeft === 0) {
        displayWinScreen();
    } else {
        if(moves > 12 && Math.random() < 0.1 + (moves - 12) * 0.02) {
            // If more than 12 moves, you have a 10 + 2 percent
            // for each additional move to lose the game.
            displayLoseScreen();
        }
    }
}

function displayWinScreen() {
    document.getElementById("winScreen").style.display = "block";
    document.getElementById("mainPage").style.display = "none";
    soldierSay("Congratulations player 222.");
}

function displayLoseScreen() {
    document.getElementById("loseScreen").style.display = "block";
    document.getElementById("mainPage").style.display = "none";
    soldierSay("Player 222 has been eliminated.");
}

function genBoxes() {
    // Probably inefficient but I don't know a better way.
    let available = ["Cube", "Cube", "Cylinder", "Cylinder", "Octogon", "Octogon", "Prism", "Prism", "Rhombus", "Rhombus", "Semicircle", "Semicircle", "Star", "Star", "Trapezoid", "Trapezoid"];
    
    for(let i = 0; i < 16; i++) {
        let image = available.splice(Math.floor(Math.random() * available.length), 1);
        document.getElementById(i).src = "Assets/" + image[0] + ".png";
        backImages[i] = image[0];
    }
}

const music = new Audio("Assets/Pink Soldiers.mp3");
music.volume = 0.4;
document.getElementById("beginButton").addEventListener("click", () => music.play() );

function hideStartScreen() {
    let startScreen = document.getElementById("startScreen");
    startScreen.addEventListener("transitionend", () => startScreen.remove());
    startScreen.style.opacity = "0";
    document.getElementById("mainPage").style.display = "block";
    reset();
}

function soldierSay(sentence) {
    let text = document.getElementsByClassName("soldierText")[0];
    text.style.opacity = "1";
    text.innerText = sentence;
    setTimeout(() => text.style.opacity = "0", 4000);
}
