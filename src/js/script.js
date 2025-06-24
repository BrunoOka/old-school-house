var btn = document.querySelector(".button-container");
btn.onmousemove = function(e){
    var x = e.pageX - btn.offsetLeft;
    var y = e.pageY - btn.offsetTop;
    btn.style.setProperty('--eixoX', x + 'px')
    btn.style.setProperty('--eixoY', y + 'px')
}
 const palavras = ["DESPERTA", "REVELA", "ATIVA", "IMPULSIONA", "ESTIMULA"];
  const elemento = document.getElementById("digitando");
  let palavraIndex = 0;
  let letraIndex = 0;
  let deletando = false;

  function digitar() {
    const palavraAtual = palavras[palavraIndex];

    if (!deletando) {
      elemento.textContent = palavraAtual.substring(0, letraIndex + 1);
      letraIndex++;

      if (letraIndex === palavraAtual.length) {
        deletando = true;
        setTimeout(digitar, 1500); // espera antes de apagar
        return;
      }
    } else {
      elemento.textContent = palavraAtual.substring(0, letraIndex - 1);
      letraIndex--;

      if (letraIndex === 0) {
        deletando = false;
        palavraIndex = (palavraIndex + 1) % palavras.length;
      }
    }

    setTimeout(digitar, deletando ? 50 : 100); // velocidade de digitação/apagamento
  }

  digitar();

const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('#menu-header');

function toggleMenu(){
    hamburguer.classList.toggle('active');
    headerMenu.classList.toggle('active');
}

hamburguer.addEventListener('click', toggleMenu);
headerMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-menu')) {
        toggleMenu();
    }
});
const contadores = document.querySelectorAll('.contador');

contadores.forEach(contador => {
  const valorFinal = parseInt(contador.getAttribute('data-valor'));
  let valorAtual = 0;

  const atualizar = setInterval(() => {
    const incremento = Math.ceil(valorFinal / 60);
    valorAtual += incremento;

    if (valorAtual >= valorFinal) {
      contador.textContent = valorFinal;
      clearInterval(atualizar);
    } else {
      contador.textContent = valorAtual;
    }
  }, 30);
});