let minTime = 500
let maxTime = 1500
let cursorDistance = 3
let maxId = 15
let minId = 1


function initGame() {
    moleAppear();
    hammerMove();
    hammerRotate();
    // TimeCount();
    gainPoints();
}


initGame()


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
    console.log(moleId)
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
    let gameContainer = document.querySelector('.game');
    let time = document.getElementById('time');
    gameContainer.addEventListener('mouseenter', function () {
        let timeLeft = parseInt(time.textContent)
        for (let i = 0; i < 10; i++) {
            setTimeout(function () {
                timeLeft -= 1
            },1000)
        }
    })
}

function start() {
// visszaszámlálás 3tól
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