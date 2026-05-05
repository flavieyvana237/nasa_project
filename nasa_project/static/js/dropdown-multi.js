
const multiBtn = document.getElementById('multi-btn');
const multiDropdown = document.getElementById('multi-dropdown');
const multiIcon = document.getElementById('multi-icon');

if (multiBtn && multiDropdown) {

  multiBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = multiDropdown.classList.toggle('hidden');

    // Rotation de la flèche
    if (!isHidden) {
      multiIcon.style.transform = 'rotate(180deg)';
    } else {
      multiIcon.style.transform = 'rotate(0deg)';
    }
  });

  // Fermer si on clique ailleurs
  document.addEventListener('click', (e) => {
    if (!multiDropdown.contains(e.target) && e.target !== multiBtn) {
      multiDropdown.classList.add('hidden');
      multiIcon.style.transform = 'rotate(0deg)';
    }
  });

  // Fermer avec Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      multiDropdown.classList.add('hidden');
      multiIcon.style.transform = 'rotate(0deg)';
    }
  });
}