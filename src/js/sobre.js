const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu-header');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  menu.classList.toggle('active');
});