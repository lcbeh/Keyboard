function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (e.keyCode == 32) {
    e.preventDefault();
    resetNotes(e, key);
  }
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
  recordNotes(e);
}

function resetNotes(e, key) {
  var notes = document.getElementById("notes");
  notes.innerHTML = "Notes:";
}

function recordNotes(e) {
  var notes = document.getElementById("notes");
  notes.innerHTML += e.key;
}

function removeTransition(e) {
  if(e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
