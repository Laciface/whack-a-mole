let minTime = 500
let maxTime = 1500
let cursorDistance = 3
let maxId = 15
let minId = 1

function initGame() {
    // moleAppear();
    // hammerMove();
    // hammerRotate();
    TimeCount();
    gainPoints();
    hammerCursor();
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


function hammerRotate(){
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
            if (timeLeft > 0){
                timeLeft -= 1
            time.textContent = timeLeft
            } else {
                clearInterval(count)
                let moles = document.querySelectorAll('.mole-pic');
                for (let mole of moles) {
                    mole.style.visibility = 'hidden'
                }
                alert('Your score is: ' + points.textContent)
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
    for (let mole of moles) {
        mole.addEventListener('click', function () {
            points.textContent = parseInt(points.textContent) + 1
        })
    }
}