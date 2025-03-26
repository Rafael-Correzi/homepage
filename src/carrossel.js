const frame = document.querySelector("#frame");
const imgGrupo = document.querySelector("#img-grupo");
const imgs = imgGrupo.querySelectorAll(":scope > picture");
const anterior = document.querySelector("#anterior");
const proxima = document.querySelector("#proxima");
const divBotoes = document.querySelector("#botoes-carrossel");

//Adiciona botões para trocar a imagem do carrossel
(function () {
  for (let i = 1; i < imgs.length -1; i++) {
    const botao = document.createElement("button");
    botao.classList.add("botao-carrossel");
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

function estadoTransicao() {
  let pronto = false;

  function confirmarPronto() {
    pronto = true;
    return pronto;
  }

  function negarPronto() {
    pronto = false;
    return pronto;
  }

  function checarPronto() {
    return pronto;
  }
  
  return { confirmarPronto, negarPronto, checarPronto };
}

const atual = closureImg();
const pronto = estadoTransicao();

function trocarImg(nova) {
  const transformIntervalo = 100 / imgs.length;
  const transform = `${nova * -transformIntervalo}%`;
  //Aplica um transform dinâmico dependendo do número de passos;
  imgGrupo.style.transform = `translateX(${transform})`;
  atual(nova);
}

function colorirBotao(i) {
  botoes.forEach((b) => {
    b.classList.remove("selecionado");
  })
  botoes[i - 1].classList.add("selecionado");
}

function irPraPrimeira() {
  if (pronto.checarPronto()) {
  imgGrupo.classList.remove("img-grupo-transition");
  trocarImg(0);
  colorirBotao(1);
  setTimeout(() => {
    imgGrupo.classList.add("img-grupo-transition");
    trocarImg(1);
  }, 1);
  }
}

(function () {
  imgGrupo.addEventListener("transitionend", () => {
    pronto.confirmarPronto();
    console.log(pronto.checarPronto());
  });
  imgGrupo.addEventListener("transitionstart", () => {
    pronto.negarPronto();
    console.log(pronto.checarPronto());
  })
})();

(function () {
  proxima.addEventListener("mousedown", () => {
    if (atual() <= imgs.length - 3) {
      trocarImg(atual() + 1);
      colorirBotao(atual());
    }
    else irPraPrimeira();
  });
})();

(function () {
  anterior.addEventListener("mousedown", () => {
    if (atual() >= 2) {
      trocarImg(atual() - 1);
      colorirBotao(atual());
    }
  });
})();

(function () {
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("mousedown", () => {
      trocarImg(i + 1);
      colorirBotao(i + 1);
    });
  }
})();

(function () {
  botoes[0].classList.add("selecionado");
})();


//Adicionar transições à página só depois do primeiro transform para a primeira imagem 
(function () {
  imgGrupo.classList.remove("img-grupo-transition");
  trocarImg(1);
  setTimeout(() => {
    imgGrupo.classList.add("img-grupo-transition");
  }, 10);
})();

