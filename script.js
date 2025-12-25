const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

music.volume = 0.25;

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
});