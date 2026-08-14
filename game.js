/* =================================
   GAME VARIABLES
================================= */

let score = 0;

let currentStory = 0;

const story = [

    "Something has gone terribly wrong...",

    "A mysterious virus has corrupted the Digital World.",

    "The fundamental knowledge that keeps the world running has been scattered.",

    "The Algorithm has been lost.",

    "You are the only one capable of restoring it.",

    "Your journey begins in the Hardware Kingdom."
];


/* =================================
   SCREEN MANAGEMENT
================================= */

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}


/* =================================
   START GAME
================================= */

function startGame() {

    currentStory = 0;

    showScreen("storyScreen");

    document.getElementById("storyText").textContent =
        story[currentStory];
}


/* =================================
   STORY
================================= */

function nextStory() {

    currentStory++;

    if (currentStory < story.length) {

        document.getElementById("storyText").textContent =
            story[currentStory];

    } else {

        startHardwareKingdom();

    }
}


/* =================================
   HARDWARE KINGDOM
================================= */

function startHardwareKingdom() {

    showScreen("gameScreen");

    score = 0;

    document.getElementById("score").textContent = score;

}


/* =================================
   INSTRUCTIONS
================================= */

function showInstructions() {

    showScreen("instructionsScreen");

}


function backToMenu() {

    showScreen("mainMenu");

}


/* =================================
   PLAYER MOVEMENT
================================= */

const player = document.getElementById("player");

let playerX = 430;
let playerY = 280;

const speed = 5;

const keys = {};


document.addEventListener("keydown", function(event) {

    keys[event.key.toLowerCase()] = true;

});


document.addEventListener("keyup", function(event) {

    keys[event.key.toLowerCase()] = false;

});


/* =================================
   GAME LOOP
================================= */

function gameLoop() {

    if (
        document.getElementById("gameScreen")
            .classList.contains("active")
    ) {

        movePlayer();

    }

    requestAnimationFrame(gameLoop);

}


function movePlayer() {

    const gameWorld =
        document.getElementById("gameWorld");

    const maxX =
        gameWorld.clientWidth - player.offsetWidth;

    const maxY =
        gameWorld.clientHeight - player.offsetHeight;


    /* UP */

    if (
        keys["w"] ||
        keys["arrowup"]
    ) {

        playerY -= speed;

    }


    /* DOWN */

    if (
        keys["s"] ||
        keys["arrowdown"]
    ) {

        playerY += speed;

    }


    /* LEFT */

    if (
        keys["a"] ||
        keys["arrowleft"]
    ) {

        playerX -= speed;

    }


    /* RIGHT */

    if (
        keys["d"] ||
        keys["arrowright"]
    ) {

        playerX += speed;

    }


    /* BOUNDARIES */

    playerX = Math.max(
        0,
        Math.min(playerX, maxX)
    );

    playerY = Math.max(
        0,
        Math.min(playerY, maxY)
    );


    /* UPDATE PLAYER */

    player.style.left = playerX + "px";

    player.style.top = playerY + "px";

}


/* =================================
   START LOOP
================================= */

gameLoop();
