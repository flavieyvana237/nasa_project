// ===== EXPLORE DROPDOWN =====
const exploreBtn = document.getElementById('explore-btn');
const exploreDropdown = document.getElementById('explore-dropdown');

if (exploreBtn && exploreDropdown) {

  // Ouvrir / fermer au clic
  exploreBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    exploreDropdown.classList.toggle('hidden');
  });

  // Fermer si on clique ailleurs
  document.addEventListener('click', (e) => {
    if (!exploreDropdown.contains(e.target) && e.target !== exploreBtn) {
      exploreDropdown.classList.add('hidden');
    }
  });

  // Fermer avec la touche Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      exploreDropdown.classList.add('hidden');
    }
  });
}