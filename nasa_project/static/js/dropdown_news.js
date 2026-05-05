// ===== NEWS & EVENTS DROPDOWN =====
const newsBtn = document.getElementById('news-btn');
const newsDropdown = document.getElementById('news-dropdown');
const newsIcon = document.getElementById('news-icon');

if (newsBtn && newsDropdown) {

  newsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = newsDropdown.classList.toggle('hidden');

    // Rotation de la flèche
    if (!isHidden) {
      newsIcon.style.transform = 'rotate(180deg)';
    } else {
      newsIcon.style.transform = 'rotate(0deg)';
    }
  });

  // Fermer si on clique ailleurs
  document.addEventListener('click', (e) => {
    if (!newsDropdown.contains(e.target) && e.target !== newsBtn) {
      newsDropdown.classList.add('hidden');
      newsIcon.style.transform = 'rotate(0deg)';
    }
  });

  // Fermer avec Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      newsDropdown.classList.add('hidden');
      newsIcon.style.transform = 'rotate(0deg)';
    }
  });
}