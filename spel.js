
document.addEventListener('DOMContentLoaded', (event) => {
    let lastObstacleTime = Date.now();

    // Variabler för canvas och dess kontext
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Variabler för bollens position och storlek
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let ballRadius = 10;

    // Variabler för hinder
    const obstacleRadius = 10;
    const obstacleSpeed = 2;
    let obstacles = [];

    // Variabler för spelkontroll
    let isJumping = false;
    let startY = y;
    let score = 0;
    let highscore = localStorage.getItem('highscore') || 0;
    let gamePaused = false;
    let gameMusic = document.getElementById('gameMusic');
    let settingsOpen = false;

        let infoAlertText = `
        Continued FÈUE Presents
Online Game: feue256.github.io/spel.html

We are thrilled to introduce our latest online game, a fun and interactive experience created using YouTube tutorials, ChatGPT, koda.nu, GitHub, and javascript.nu. This game has been meticulously developed with JavaScript, HTML, and CSS, making it not only entertaining but also coder-friendly.

Game Features:
Objective: The primary goal of the game is to avoid touching the red balls. This simple yet challenging mechanic will keep you engaged as you navigate through the game.
Controls: Use the arrow keys to maneuver the white ball, which represents you, the player. The controls are intuitive and responsive, ensuring a smooth gameplay experience.
Scoring System: You earn points for each red ball you successfully avoid. The more agile and precise you are, the higher your score will be.
AI-Generated Music: Enjoy an immersive gaming experience with AI-generated background music that adapts to the pace of the game.
Developer-Friendly: Designed with coders in mind, the game’s code is accessible and modifiable. Whether you're a beginner or an experienced developer, you can explore and customize the game to your liking.
How to Play:
Visit: Go to feue256.github.io/spel.html.
Start: The game will load automatically. Press any key to begin.
Control: Use the arrow keys on your keyboard to move the white ball.
Avoid: Navigate around the red balls to avoid them and score points.
Enjoy: Let the AI-generated music enhance your gameplay experience.
We invite you to dive into the game and test your skills. Share your high scores with friends and see who can master the art of dodging the red balls.
    This is info about the game. The arrow keys right and left are there to go to their respective directions. Space is there to make it more difficult.
    `;

    let infoAlertActive = false;
    
    // Knappar för spelkontroll och inställningar
    const gameStartButton = document.getElementById('gameStart');
    const gamePauseButton = document.getElementById('gamePause');
    const gameResetButton = document.getElementById('gameReset');
    const settingsButton = document.getElementById('settings');
    const infoButton = document.getElementById('info');

    // Lägg till eventlyssnare för knapparna
    gameStartButton.addEventListener("click", startGame);
    gamePauseButton.addEventListener("click", pauseGame);
    gameResetButton.addEventListener("click", resetGame);
    settingsButton.addEventListener("click", toggleSettings);
    info.addEventListener("click", infoAlert);

    // Funktion för att starta spelet
    function startGame() {
            console.log('Start game button clicked');
            gameMusic.play(); // Spela spelmusik
            gamePaused = false;
            if (infoAlertActive = false) {
                gameLoop(); // Starta spelets huvudloop
        }
    }

    // Funktion för att pausa spelet
    function pauseGame() {
        console.log('Pause game button clicked');
        gameMusic.pause(); // Pausa spelmusik
        gamePaused = true;
        alert('Game Paused');
    }

    // Funktion för att återställa spelet
    function resetGame() {
        console.log('Reset game button clicked');
        localStorage.setItem('highscore', 0);
        highscore = 0;
        updateHighscore();
    }

    function infoAlert() {
        console.log('InfoActive');
        infoAlertActive = true;
        alert(infoAlertText);
    }

    // Funktion för att rita bollen
    function drawBall() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }

    // Funktion för att rita hinder (bollar som faller ner)
    function drawObstacles() {
        for (let i = 0; i < obstacles.length; i++) {
            ctx.beginPath();
            ctx.arc(obstacles[i].x, obstacles[i].y, obstacleRadius, 0, Math.PI * 2);
            ctx.fillStyle = 'red'; // Färg för hinder
            ctx.fill();
            ctx.closePath();
        }
    }

    // Funktion för att skapa och hantera hinder
    function spawnObstacle() {
        let randomX = Math.random() * (canvas.width - 2 * obstacleRadius) + obstacleRadius;
        let obstacle = {
            x: randomX,
            y: -obstacleRadius
        };
        obstacles.push(obstacle);
    }

    // Funktion för att flytta hinder och kolla kollision
    function moveObstacles() {
        for (let i = 0; i < obstacles.length; i++) {
            obstacles[i].y += obstacleSpeed;

            // Kollision med bollen
            if (Math.abs(obstacles[i].x - x) < ballRadius + obstacleRadius && Math.abs(obstacles[i].y - y) < ballRadius + obstacleRadius) {
                // Kollision inträffade
                gameOver();
                return;
            }

            // Om hindret når botten av canvasen, ta bort det och öka poängen
            if (obstacles[i].y > canvas.height + obstacleRadius) {
                obstacles.splice(i, 1);
                i--;
                score++; // Öka poängräkningen när spelaren hoppar över ett hinder
            }
        }
    }

    // Funktion för att hantera spelarens rörelse med tangentbordet
    function movePlayer() {
        if (keys.left && x > ballRadius) {
            x -= 5;
        }
        if (keys.right && x < canvas.width - ballRadius) {
            x += 5;
        }
    }

    // Huvudspelloopen
    function gameLoop() {
        if (!gamePaused) {
            let elapsedTime = Date.now() - lastObstacleTime;
            const obstacleInterval = 2000; // Ersätt med det önskade tidsintervallet i millisekunder

            // Skapa hinder med viss tidsintervall
            if (elapsedTime > obstacleInterval) {
                spawnObstacle();
                lastObstacleTime = Date.now();
            }

            moveObstacles();
            movePlayer();
            drawBall();
            drawObstacles();
            updateHighscore();

            // Anropar sig själv med requestAnimationFrame för att skapa en spel-loop
            requestAnimationFrame(gameLoop);
        } else {
            // Om spelet är pausat, fortsätt anropa gameLoop utan att göra något annat
            requestAnimationFrame(gameLoop);
        }
    }

    // Funktion för att hantera hopp
    function jump() {
        if (!isJumping) {
            isJumping = true;
            let jumpHeight = 50;
            let jumpDuration = 500;
            let startTime = null;

            function animateJump(timestamp) {
                if (!startTime) startTime = timestamp;
                let progress = timestamp - startTime;
                if (progress > jumpDuration) {
                    progress = jumpDuration;
                    isJumping = false;
                }

                y = startY - jumpHeight * Math.sin((progress / jumpDuration) * Math.PI);
                drawBall();

                if (progress < jumpDuration) {
                    requestAnimationFrame(animateJump);
                } else {
                    y = startY;
                    drawBall();
                }
            }

            requestAnimationFrame(animateJump);
        }
    }

    // Deklarera keys här
    const keys = { left: false, right: false };

    // Eventlyssnare för tangentnedtryckningar
    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'ArrowLeft':
                keys.left = true;
                break;
            case 'ArrowRight':
                keys.right = true;
                break;
            case ' ': // Mellanslagstangenten för att hoppa
                jump();
                bollRadius += 10;
                break;
        }
    });

    document.addEventListener('keyup', function(event) {
        switch (event.key) {
            case 'ArrowLeft':
                keys.left = false;
                break;
            case 'ArrowRight':
                keys.right = false;
                break;
        }
    });

    // Funktion för att uppdatera highscore
    function updateHighscore() {
        document.getElementById('highscoreValue').textContent = highscore;
    }

    // Funktion för att visa inställningar (kan implementeras efter behov)
    function toggleSettings() {
        settingsOpen = !settingsOpen;
        if (settingsOpen) {
            // Visa inställningar
        } else {
            // Dölj inställningar
        }
    }

    // Funktion för att visa highscore
    function viewHighscore() {
        let highscore = localStorage.getItem('highscore') || 0;
        alert(`Highscore: ${highscore}`);
    }

    // Funktion för att hantera spelets slut och återställning av sidan
    function gameOver() {
        // Spara highscore om det är ett nytt rekord
        if (score > highscore) {
            highscore = score;
            localStorage.setItem('highscore', highscore);
        }
        // Visa game over-meddelande och poäng
        alert(`Game Over! Your score was ${score}. Highscore: ${highscore}`);

        // Återställ sidan
        resetPage();
    }

    // Funktion för att återställa sidan
    function resetPage() {
        window.location.reload();
    }

    // Uppdatera highscore när sidan laddas
    updateHighscore();
});
