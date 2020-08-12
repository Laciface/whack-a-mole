let minTime = 500
let maxTime = 1500
let cursorDistance = 3
let maxId = 15
let minId = 1
let game = true

function initGame() {
    TimeCount();
    gainPoints();
    start();
}


initGame()

function hammerCursor() {
    let gameContainer = document.querySelector('.game')
    gameContainer.style.cursor = "url('../images/hammer.png'), auto";
}


function hammerMove() {

    let gameContainer = document.querySelector('.game');
    gameContainer.onmousemove = applyHammerPointer

    let hammer = document.querySelector('#hammer')

    function applyHammerPointer(event) {
        hammer.style.left = event.clientX - (hammer.offsetWidth / cursorDistance) + 'px'
        hammer.style.top = event.clientY - (hammer.offsetHeight / cursorDistance) + 'px'
    }
}


function moleAppear() {
    if (game === true) {
        let randomTime = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime)
        let moles = document.querySelectorAll('.mole-pic');
        let moleId = Math.floor(Math.random() * maxId) + minId
        for (let mole of moles) {
            if (parseInt(mole.parentNode.id) === moleId) {
                mole.style.visibility = 'visible'
                setTimeout(function () {
                    mole.style.visibility = 'hidden'
                    moleAppear()
                }, randomTime)
            }
        }
    }
}


function hammerRotate() {
    let hammer = document.getElementById('hammer');
    hammer.addEventListener('mousedown', function () {
        hammer.style.transform = "rotate(-90deg)"
    })
    hammer.addEventListener('mouseup', function () {
        hammer.style.transform = "rotate(-20deg)"
    })
}

function TimeCount() {
    let points = document.getElementById('points')
    let button = document.querySelector('.btn.btn-primary.btn-lg')
    let time = document.getElementById('time');
    button.addEventListener('click', function () {
        let timeLeft = parseInt(time.textContent)
        let count = setInterval(function () {
            if (timeLeft > 0) {
                timeLeft -= 1
                time.textContent = timeLeft
            } else {
                clearInterval(count)
                alert('Your score is: ' + points.textContent)
                game = false
            }

        }, 1000)
    })
}

function start() {
    let button = document.querySelector('.btn.btn-primary.btn-lg')
    button.addEventListener('click', function () {
        moleAppear()
    })
}

function gainPoints() {
    let moles = document.querySelectorAll('.mole-pic');
    let points = document.getElementById('points')

    let tripleSound = new Audio("/static/sound/triple.mp3");
    let inhumanSound = new Audio("/static/sound/inhuman.mp3");
    let airhornSound = new Audio("/static/sound/airhorn.mp3");
    let nooneSound = new Audio("/static/sound/noone.mp3")
    let screamSound = new Audio("/static/sound/scream.mp3")

    for (let mole of moles) {
        mole.addEventListener('click', function () {
            points.textContent = parseInt(points.textContent) + 1
            screamSound.play()
            if (parseInt(points.textContent) === 3) {
                tripleSound.play()
            } else if (parseInt(points.textContent) === 6) {
                inhumanSound.play()
            } else if (parseInt(points.textContent) === 9)
                airhornSound.play()
            else if (parseInt(points.textContent) === 12) {
                nooneSound.play()
            }

        })
    }
}

let gameField = document.getElementById("game-field");
gameField.addEventListener("click", playSound);

let sound = new Audio();
sound.src = "/static/sound/hammer.mp3";
sound.oncanplaythrough = function () {
    sound.readyToRock = true;
}

function playSound() {
    if (sound && sound.readyToRock) {
        sound.currentTime = 0;
        sound.play();
    }
}