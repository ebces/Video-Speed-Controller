const speedBar = document.querySelector('.player__speed-bar');
const video = document.querySelector('.player__video');
const speed = document.querySelector('.player__speed');
const MIN_VIDEO_SPEED = 10;
const RATE_OF_CHANGE = 100;

speedBar.addEventListener('mousemove', (e) => {
  speedBar.max = e.target.offsetWidth;
  speedBar.value = e.offsetX;
  if (e.offsetX > MIN_VIDEO_SPEED) {
    video.playbackRate = e.offsetX / RATE_OF_CHANGE;
  }
  speed.textContent = `${e.offsetX / RATE_OF_CHANGE}x`;
  speed.style.marginTop = `${e.offsetX / 2}px`;
});
