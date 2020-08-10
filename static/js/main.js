window.onload = molesMoveLeft

function molesMoveLeft() {
    setTimeout(function () {
        let moles = document.querySelectorAll('.mole-pic')
    for (let mole of moles){
        mole.style.visibility = 'visible'
    }
    },3000)
}