document.addEventListener("keypress", (e) => {
  //   console.log(e.keyCode);

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyBtn = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  keyBtn.classList.add("glow");
  setTimeout(() => {
    keyBtn.classList.remove("glow");
  }, 200);
  console.log(e.keyCode, audio);
});
