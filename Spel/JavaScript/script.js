
// Hämta element från DOM
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const fpsDisplay = document.getElementById('fps');
const scoreDisplay = document.getElementById('score');
const errorMessage = document.getElementById('error-message');
const playerSettingsDisplay = document.getElementById('settings');
const rankDisplay = document.getElementById('rank');

// Definiera figurer
const redFigure = {
    image: new Image(),
    size: 50,
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    speed: 8,
    doubleSpeed: 16
};

const blueFigure = {
    image: new Image(),
    color: 'blue',
    size: 54,
    x: window.innerWidth / 2 + 5,
    y: window.innerHeight / 2 + 5
};

redFigure.image.src = 'Res/katt.jpg'; // Ladda bilden
blueFigure.image.src = 'Res/mus.jpg'; // Ladda bilden

let speedMultiplier = 1;
let settingsIsActivated = false;
let score = parseInt(localStorage.getItem('score')) || 0; // Hämta poäng från localStorage eller sätt till 0
let cameraOffset = { x: 0, y: 0 }; // Kameraoffset
let moveAmount = redFigure.size * 0.1;
let XY = false;

// Definiera ranker
const ranks = [
    { name: "Beginner", threshold: 0 },
    { name: "Intermediate", threshold: 25 },
    { name: "Advanced", threshold: 150 },
    { name: "Expert", threshold: 300 },
    { name: "Master", threshold: 450 },
    { name: "Grandmaster", threshold: 600 },
    { name: "Champion", threshold: 800 },
    { name: "Legend", threshold: 1000 },
    { name: "Mythic", threshold: 1250 },
    { name: "Immortal", threshold: 1500 },
    { name: "Divine", threshold: 1750 },
    { name: "Supreme", threshold: 2000 },
    { name: "Eternal", threshold: 2250 },
    { name: "Infinite", threshold: 2500 },
    { name: "Transcendent", threshold: 2750 },
    { name: "Omnipotent", threshold: 3000 },
];

// Funktion för att få aktuell rank baserat på poäng
function getRank(score) {
    for (let i = ranks.length - 1; i >= 0; i--) {
        if (score >= ranks[i].threshold) {
            return ranks[i];
        }
    }
    return ranks[0];
}

// Funktion för att justera canvasstorlek
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    redFigure.size = Math.min(canvas.width, canvas.height) / 10;
    blueFigure.size = redFigure.size + 4;

    redFigure.x = canvas.width / 2 - redFigure.size / 2;
    redFigure.y = canvas.height / 2 - redFigure.size / 2;
    blueFigure.x = canvas.width / 4 - blueFigure.size / 2;
    blueFigure.y = canvas.height / 4 - blueFigure.size / 2;

    moveAmount = redFigure.size * 0.1;

    drawFigures();
}

// Funktion för att rita figurerna
function drawFigures() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = (redFigure.x + blueFigure.x + redFigure.size / 2 + blueFigure.size / 2) / 2;
    const centerY = (redFigure.y + blueFigure.y + redFigure.size / 2 + blueFigure.size / 2) / 2;

    cameraOffset.x = canvas.width / 2 - centerX;
    cameraOffset.y = canvas.height / 2 - centerY;

    context.drawImage(redFigure.image, redFigure.x + cameraOffset.x, redFigure.y + cameraOffset.y, redFigure.size, redFigure.size);
    context.drawImage(blueFigure.image, blueFigure.x + cameraOffset.x, blueFigure.y + cameraOffset.y, blueFigure.size, blueFigure.size);
}

// Funktion för att flytta röda figuren
function moveRedFigure(dx, dy) {
    redFigure.x += dx * speedMultiplier;
    redFigure.y += dy * speedMultiplier;
    redFigure.x = Math.max(0, Math.min(canvas.width - redFigure.size, redFigure.x));
    redFigure.y = Math.max(0, Math.min(canvas.height - redFigure.size, redFigure.y));
    checkCollision();
    drawFigures();
}

// Funktion för att flytta blå figuren
function moveBlueFigureTo(x, y) {
    blueFigure.x = x - blueFigure.size / 2;
    blueFigure.y = y - blueFigure.size / 2;
    blueFigure.x = Math.max(0, Math.min(canvas.width - blueFigure.size, blueFigure.x));
    blueFigure.y = Math.max(0, Math.min(canvas.height - blueFigure.size, blueFigure.y));
    checkCollision();
    drawFigures();
}

// Funktion för att kontrollera kollision mellan figurerna
function checkCollision() {
    const dx = Math.abs(redFigure.x - blueFigure.x);
    const dy = Math.abs(redFigure.y - blueFigure.y);
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < (redFigure.size / 2 + blueFigure.size / 2)) {
        score++;
        localStorage.setItem('score', score); // Spara poäng till localStorage
        scoreDisplay.textContent = `Poäng: ${score}`; // Uppdatera poäng på webbsidan
        errorMessage.style.display = 'block'; // Visa felmeddelande
        setTimeout(() => {
            errorMessage.style.display = 'none'; // Dölj felmeddelande efter 1 sekund
        }, 1000);

        rankScore(); // Anropa rankScore när poängen uppdateras
    }
}

// Funktion för spelloop
let lastTime = Date.now();
function gameLoop() {
    if (!settingsIsActivated) {
        const now = Date.now();
        const delta = now - lastTime;
        lastTime = now;

        const fps = (1000 / delta).toFixed(0);
        fpsDisplay.textContent = `FPS: ${fps}`;

        drawFigures(); // Flytta ritningen här för att uppdatera varje bildruta
        requestAnimationFrame(gameLoop);
    }
}

// Event-lyssnare för knapptryckningar
document.getElementById('left-button').addEventListener('click', () => moveRedFigure(-moveAmount, 0));
document.getElementById('up-button').addEventListener('click', () => moveRedFigure(0, -moveAmount));
document.getElementById('down-button').addEventListener('click', () => moveRedFigure(0, moveAmount));
document.getElementById('right-button').addEventListener('click', () => moveRedFigure(moveAmount, 0));
document.getElementById('speed-button').addEventListener('click', () => {
    speedMultiplier = speedMultiplier === 1 ? 2 : 1;
    document.getElementById('speed-button').textContent = speedMultiplier === 1 ? 'Double Speed' : 'Normal Speed';
});

document.getElementById('reset').addEventListener('click', resetScore);
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('jump-button').addEventListener('click', jumpRedFigure);

// Funktion för att återställa poängen
function resetScore() {
    score = 0;
    localStorage.setItem('score', score); // Återställ poäng i localStorage
    scoreDisplay.textContent = `Poäng: ${score}`; // Uppdatera poäng på webbsidan
    rankDisplay.textContent = ''; // Rensa rankdisplay
}

// Funktion för att starta spelet
function startGame() {
    settingsIsActivated = false;
    lastTime = Date.now();
    gameLoop();
}

// Funktion för att få röda figuren att hoppa
function jumpRedFigure() {
    const jumpHeight = redFigure.size; // Definiera hur högt figuren ska hoppa
    redFigure.y -= jumpHeight;
    redFigure.y = Math.max(0, redFigure.y); // Se till att figuren inte hoppar utanför canvasen
    drawFigures();
    setTimeout(() => {
        redFigure.y += jumpHeight; // Återställ figuren till sin ursprungliga position efter hoppet
        redFigure.y = Math.min(canvas.height - redFigure.size, redFigure.y);
        drawFigures();
    }, 300); // Specifika hur länge figuren ska vara i hoppstatus (300 ms)
}

// Event-lyssnare för klick på canvas
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    moveBlueFigureTo(x, y);
});

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 40;
        this.h = 40;
        this.speed = redFigure.speed;
        this.doubleSpeed = redFigure.doubleSpeed;
        this.image = redFigure.image;
    }
}

const player = new Player(redFigure.x, redFigure.y);

console.log(player);
console.log(redFigure.image.src); // Logga källan till bilden som tilldelats redFigure

canvas.addEventListener("mousedown", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    if (mouseX === 370 && mouseY === 270 || XY === true) {
        console.log(`Game started mouse position X: ${mouseX} and Y position: ${mouseY}`);
    }
    console.log(e);
    console.log(mouseX);
    console.log(mouseY);
});

// Funktion för att uppdatera rank
function rankScore() {
    const currentRank = getRank(score);
    rankDisplay.textContent = `Rank: ${currentRank.name}`; // Uppdatera rankdisplay
}

function fusk(){
    score += 150;
}

// Sätt canvas storlek och starta spelet
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
