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

function hammerRotate() {
    let hammer = document.getElementById('hammer');
    hammer.addEventListener('mousedown', function () {
        hammer.style.transform = "rotate(-90deg)"
    })
    hammer.addEventListener('mouseup', function () {
        hammer.style.transform = "rotate(-20deg)"
    })
}