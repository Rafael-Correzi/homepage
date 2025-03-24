const frame = document.querySelector("#frame");
const imgGrupo = document.querySelector("#img-grupo");
const imgs = imgGrupo.querySelectorAll(":scope > picture");
const anterior = document.querySelector("#anterior");
const proxima = document.querySelector("#proxima");
const divBotoes = document.querySelector("#botoes-carrossel");

//Adiciona botões para trocar a imagem do carrossel
(function () {
  for (let i = 0; i < imgs.length; i++) {
    const botao = document.createElement("button");
    botao.className = "botao-carrossel";
    divBotoes.appendChild(botao);
  }
})();

const botoes = document.querySelectorAll(".botao-carrossel");

function closureImg() {
  let imgAtual = 0;

  function atualizarImg(atual = imgAtual) {
    imgAtual = atual;
    return imgAtual;
  }

  return atualizarImg;
}

const atual = closureImg();

function trocarImg(nova) {
  const transformIntervalo = 100 / imgs.length;
  const transform = `${nova * -transformIntervalo}%`;
  //Aplica um transform dinâmico dependendo do número de passos;
  imgGrupo.style.transform = `translateX(${transform})`;
  atual(nova);
}

(function () {
proxima.addEventListener("mousedown", () => {
  if (atual() <= imgs.length - 2) {
    trocarImg(atual() + 1);
  }
});
})();


(function () {
anterior.addEventListener("mousedown", () => {
  if (atual() >= 1) {
    trocarImg(atual() - 1);
  }
});
})();

(function () {
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("mousedown", () => {
      trocarImg(i);
    })
  }
})();



