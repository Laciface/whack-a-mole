let minTime = 500
let maxTime = 1500
let cursorDistance = 3
let maxId = 15
let minId = 1

function initGame() {
    moleAppear();
    hammerMove();

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

