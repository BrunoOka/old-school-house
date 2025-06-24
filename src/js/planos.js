const hamburguer = document.getElementById('hamburguer');
const headerMenu = document.getElementById('menu-header');

hamburguer.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  hamburguer.classList.toggle('active');
});
