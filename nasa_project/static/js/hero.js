const playBtn = document.getElementById('hero-play-btn');
const iconPlay = document.getElementById('icon-play');
const iconPause = document.getElementById('icon-pause');
const thumbCircle = document.getElementById('hero-thumb');

if (playBtn) {
  let isPlaying = false;

  playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;

    if (isPlaying) {
      // Passe en mode "play"
      iconPlay.classList.add('hidden');
      iconPause.classList.remove('hidden');
      thumbCircle.classList.add('loading');  // ← anneau tourne
    } else {
      // Passe en mode "pause"
      iconPause.classList.add('hidden');
      iconPlay.classList.remove('hidden');
      thumbCircle.classList.remove('loading');  // ← anneau s'arrête
    }
  });
}  