const logo = document.querySelector("#logo");
const barra = document.querySelector(".pesquisa");
const menu = document.querySelector("#menu");

function expandirBarra() {
  const largura = Math.max(document.clientWidth || 0, window.innerWidth);

  if(largura < 540) {
 
    barra.addEventListener("focusin", () => {
      barra.classList.add("expandir-barra");
      logo.classList.add("escondido-visualmente");
      menu.classList.add("escondido-visualmente");
    })
     barra.addEventListener("focusout", () => {
      barra.classList.remove("expandir-barra");
      logo.classList.remove("escondido-visualmente");
      menu.classList.remove("escondido-visualmente");
    })
  }
}

window.onload = expandirBarra();
window.onresize = () => expandirBarra();