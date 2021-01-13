const keyCodes = {
  A: 65,
  S: 83,
  D: 68,
  F: 70,
  G: 71,
  H: 72,
  J: 74,
  K: 75,
  L: 76,
};

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function playSoundOnTouch(event) {
  const audio = document.querySelector(
    `audio[data-key="${keyCodes[event.path[0].innerText]}"]`
  );
  const key = document.querySelector(
    `div[data-key="${keyCodes[event.path[0].innerText]}"]`
  );
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
  key.addEventListener("touchstart", playSoundOnTouch, false);
  key.addEventListener("click", playSoundOnTouch);
});
window.addEventListener("keydown", playSound);
