const speedBar = document.querySelector('.player__speed-bar');
const video = document.querySelector('.player__video');
const speed = document.querySelector('.player__speed');

speedBar.addEventListener('mousemove', (e) => {
  speedBar.max = e.target.offsetWidth;
  speedBar.value = e.offsetX;
  if (e.offsetX > 10) {
    video.playbackRate = e.offsetX / 100;
  }
  speed.textContent = `${e.offsetX / 100}x`;
  speed.style.marginTop = `${e.offsetX / 2}px`;
});
