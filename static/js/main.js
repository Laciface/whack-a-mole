window.onload = molesMoveLeft

function molesMoveLeft() {
    let moles = document.querySelectorAll('.mole-pic')
    for (let mole of moles){
        let MoleWidth = mole.style.width
        MoleWidth -= 50
    }
}