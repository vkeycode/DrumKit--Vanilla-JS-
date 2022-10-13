function playSounds(e) {

  const keyCode = e.keyCode
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`)

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing")
  tempoCircle(keyCode)

}

function clickPlay(e) {

  const keyCode = e.path[0].children[0].innerText.charCodeAt(0)
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`)

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing")
  tempoCircle(keyCode)

}


function removeTransition(e) {

  if (e.propertyName !== "transform") return;
  this.classList.remove("playing")

}

function tempoCircle(e) {

  const tempo = document.querySelector(".tempo")
  tempo.classList.add(`radius${e}`)

  setTimeout(() => {
    tempo.classList.remove(`radius${e}`)
  }, 200);

}


const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend", removeTransition))
keys.forEach(key => key.addEventListener("click", clickPlay))

window.addEventListener("keydown", playSounds)