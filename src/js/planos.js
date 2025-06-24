const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('#menu-header');

hamburguer.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
});