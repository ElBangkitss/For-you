const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

music.volume = 0.25; // volume 25%

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  // trigger audio
  if (music.paused) {
    music.play().catch(() => {
      console.log("Audio blocked, klik lagi untuk play");
    });
  }
});
