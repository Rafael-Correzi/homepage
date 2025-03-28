const menu = document.querySelector("#menu");
const hamburguer = document.querySelector("#hamburguer");
const sideNav = document.querySelector("#side-nav");
const opcoes = document.querySelectorAll(".opcao");
const primeiroIcone = document.querySelector("#primeiro-icone");
const botaoX = document.querySelector("#fechar-side-nav");

function hamburguerEstado() {
  let fechado = true;

  function alternarEstado() {
    fechado ? fechado = false : fechado = true;
    return fechado;
  }

  return alternarEstado;
}

function sideNavEstado() {
  let fechado = true;

  function modificarEstado() {
    fechado ? fechado = false : fechado = true;
    return fechado;
  }

  function checarEstado() {
    return fechado;
  }
  
  return {modificarEstado, checarEstado};
}


const estado = hamburguerEstado();
const estadoSideNav = sideNavEstado();

function fecharMenu() {
  hamburguer.classList.remove("abrir-hamburguer");
  hamburguer.classList.add("fechar-hamburguer");
  menu.classList.remove("menu-hover");
  menu.classList.remove("abrir-menu");
  menu.classList.add("fechar-menu");
}

function abrirMenu() {
  hamburguer.classList.remove("fechar-hamburguer");
  hamburguer.classList.add("abrir-hamburguer");
  menu.classList.add("menu-hover");
  menu.classList.remove("fechar-menu");
  menu.classList.add("abrir-menu");
}

function fecharSideNav() {
  sideNav.classList.remove("abrir-side-nav");
  sideNav.classList.add("fechar-side-nav");
}

function abrirSideNav() {
  sideNav.classList.remove("fechar-side-nav");
  sideNav.classList.add("abrir-side-nav");
}

function abrirOuFechar() {
  estado() ? (abrirMenu(), fecharSideNav()) : (fecharMenu(), abrirSideNav());
}

function fechar() {
  estado();
  fecharSideNav();
  abrirMenu();
}

function abrir() {
  abrirSideNav();
  fecharMenu();
}

menu.addEventListener("focus", () => {
  abrir();
})

menu.addEventListener("click", () => {
  estadoSideNav.modificarEstado();
  abrirOuFechar();
});

opcoes.forEach(opcao => {
  opcao.addEventListener("focus", () => {
    abrir();
  });
});

primeiroIcone.addEventListener("focus", () => {
  fechar();
})

botaoX.addEventListener("click", () => {
  estadoSideNav.modificarEstado();
  fechar();
})

document.addEventListener("click", (e) => {
  if (!estadoSideNav.checarEstado() && !sideNav.contains(e.target) && !menu.contains(e.target)) {
    estadoSideNav.modificarEstado();
    fechar();
  }
});
