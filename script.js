const cards = document.querySelectorAll('.product-card');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalClose = document.querySelector('.modal-close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    modalImage.src = card.dataset.image;
    modalTitle.textContent = card.dataset.title;
    modalDescription.textContent = card.dataset.description;
    modal.classList.add('active');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});


