let minTime = 500
let maxTime = 1500
let cursorDistance = 3
let maxId = 15
let minId = 1
let game = true

let tripleSound = new Audio("/static/sound/triple.mp3");
let inhumanSound = new Audio("/static/sound/inhuman.mp3");
let airhornSound = new Audio("/static/sound/airhorn.mp3");
let nooneSound = new Audio("/static/sound/noone.mp3")
let screamSound = new Audio("/static/sound/scream.mp3")
let timerSound = new Audio("/static/sound/timer.mp3")

function initGame() {
    TimeCount();
    gainPoints();
    start();
}


initGame()

function start() {
    let button = document.querySelector('.btn.btn-primary.btn-lg')
    let level = document.querySelector('.level')
    button.addEventListener('click', function () {
        if (level.textContent === 'Warming up') {
            level.textContent = 0
        } else {
            let levelUp = parseInt(level.textContent)
            levelUp += 1
            level.textContent = levelUp
        }
        moleAppear()
        button.style.visibility = 'hidden'
        button.innerHTML = 'Next level'
    })
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
    } else {
        return 'Game over'
    }
}


function TimeCount() {
    let points = document.getElementById('points')
    let button = document.querySelector('.btn.btn-primary.btn-lg')
    let time = document.getElementById('time');
    button.addEventListener('click', function () {
        let timeLeft = parseInt(time.textContent)
        let count = setInterval(function () {
            if (timeLeft === 5) {
                timerSound.play()
                timeLeft -= 1
                time.textContent = timeLeft
            } else if ( timeLeft > 0){
                timeLeft -= 1
                time.textContent = timeLeft
            } else {
                clearInterval(count)
                alert('Your score is: ' + points.textContent)
                game = false
                playAgain(button, time)
            }

        }, 1000)
    })
}



function gainPoints() {
    let moles = document.querySelectorAll('.mole-pic');
    let points = document.getElementById('points')

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

// function countDown() {
//     let modal = document.getElementById('modal');
//     let count = 3
//     setInterval(function () {
//         modal.textContent = count
//         count -= 1
//     })
// }

function playAgain(button, time) {
    let points = document.getElementById('points')
    button.style.visibility = 'visible'
    time.textContent = 30
    button.addEventListener('click', function () {
        game = true
        points.textContent = 0
        moleAppear()
    })

}