// window.onload = molesMoveLeft

function molesMoveLeft() {
    setTimeout(function () {
        let moles = document.querySelectorAll('.mole-pic')
        for (let mole of moles) {
            mole.style.visibility = 'visible'
        }
    }, 3000)
}


hammerThirdTry()

function hammerThirdTry() {

    let gameContainer = document.querySelector('.game');
    gameContainer.onmousemove = applyHammerPointer

    let hammer = document.querySelector('#hammer')

    function applyHammerPointer(event) {
        hammer.style.left = event.clientX - (hammer.offsetWidth / 3) + 'px'
        hammer.style.top = event.clientY - (hammer.offsetHeight / 3) + 'px'
    }
}

function randomMole() {
    let moles = document.querySelectorAll('.mole-pic');
    let moleId = Math.floor(Math.random() * 15) + 1
    for (let mole of moles) {
        if (parseInt(mole.parentNode.id) === moleId) {
            mole.style.visibility = 'visible'
            setTimeout(function () {
                mole.style.visibility = 'hidden'
                randomMole()
            }, 2000)
        }
    }
}

randomMole()