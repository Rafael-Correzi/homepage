const menu = document.querySelector("#menu");
const hamburguer = document.querySelector("#hamburguer");
const sideNav = document.querySelector("#side-nav");
const sideList = document.querySelector("#side-list");
const opcoes = document.querySelectorAll(".opcao");
const primeiroIcone = document.querySelector("#primeiro-icone");

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

function fecharSideNav() {
  sideNav.classList.remove("abrir-side-nav");
  sideNav.classList.add("fechar-side-nav");
  sideList.classList.add("hide");
}

function abrirSideNav() {
  sideNav.classList.remove("fechar-side-nav");
  sideNav.classList.add("abrir-side-nav");
  sideList.classList.remove("hide");
}

function abrirOuFechar() {
  estado() ? (abrirHamburguer(), fecharSideNav()) : (fecharHamburguer(), abrirSideNav());
}

menu.addEventListener("click", () => {
  abrirOuFechar();
});

menu.addEventListener("focus", () => {
  abrirSideNav();
  fecharHamburguer();
});

opcoes.forEach(opcao => {
  opcao.addEventListener("focus", () => {
  abrirSideNav();
  fecharHamburguer();
  });
});

primeiroIcone.addEventListener("focus", () => {
  fecharSideNav();
  abrirHamburguer();
})
