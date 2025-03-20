const menu = document.querySelector("#menu");
const hamburguer = document.querySelector("#hamburguer");

function hamburguerEstado() {
  let open = true;

  function alternarEstado() {
    open ? open = false : open = true;
    return open;
  }

  return alternarEstado;
}

const estado = hamburguerEstado();

function fecharHamburguer() {
  hamburguer.classList.remove("abrir-hamburguer");
  hamburguer.classList.add("fechar-hamburguer");
}

function abrirHamburguer() {
  hamburguer.classList.remove("fechar-hamburguer");
  hamburguer.classList.add("abrir-hamburguer");
}

menu.addEventListener("click", () => {
  estado() ? abrirHamburguer() : fecharHamburguer();
});