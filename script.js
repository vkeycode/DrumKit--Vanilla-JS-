function playSounds(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; 
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing")
    tempoCircle(e)
}

function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing")
}

function tempoCircle(e) {
    const tempo = document.querySelector(".tempo")
    tempo.classList.add(`radius${e.keyCode}`)
    setTimeout(() => {
        tempo.classList.remove(`radius${e.keyCode}`)
    }, 200);
}


const keys = document.querySelectorAll(".key");

keys.forEach( key => key.addEventListener("transitionend", removeTransition))

window.addEventListener("keydown", playSounds)