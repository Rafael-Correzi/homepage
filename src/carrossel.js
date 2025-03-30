const imgGrupo = document.querySelector("#img-grupo");
const imgs = imgGrupo.querySelectorAll(":scope > picture");
const anterior = document.querySelector("#anterior");
const proxima = document.querySelector("#proxima");
const divBotoes = document.querySelector("#botoes-carrossel");
const info = document.querySelector("#info");

//Adiciona botões para trocar a imagem do carrossel
(function () {
  for (let i = 0; i < imgs.length; i++) {
    const botao = document.createElement("button");
    botao.classList.add("botao-carrossel");
    botao.ariaLabel = `Trocar para a imagem ${i + 1}`;
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
  clearTimeout(timeout);
  const transformIntervalo = 100 / imgs.length ;
  const transform = `${nova * -transformIntervalo}%`;
  //Aplica um transform dinâmico dependendo do número de passos;
  imgGrupo.style.transform = `translateX(${transform})`;
  abrirInfo();
  atual(nova);
  info.classList.add("mudar-info");
}

function colorirBotao(i) {
  botoes.forEach((b) => {
    b.classList.remove("selecionado");
  })
  if (i < 0) i = imgs.length - 1;
  botoes[i].classList.add("selecionado");
}

function proximaImg() {
  if (atual() <= imgs.length - 2) {
    trocarImg(atual() + 1);
    colorirBotao(atual());
  }
  else {
    trocarImg(0);
    colorirBotao(0);
  }
}

function voltarImg() {
  if (atual() >= 1) {
    trocarImg(atual() - 1);
    colorirBotao(atual());
  }
  else {
    trocarImg(imgs.length - 1);
    colorirBotao(imgs.length - 1);
  }
}

function abrirInfo() {
  
}



(function () {
  proxima.addEventListener("click", () => {
    proximaImg();
  });
})();

(function () {
  anterior.addEventListener("click", () => {
    voltarImg();
  });
})();

(function () {
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", () => {
      trocarImg(i);
      colorirBotao(i);
    });
  }
})();

(function () {
  botoes[0].classList.add("selecionado");
})();

(function () {
  info.addEventListener("animationend", () => {
    info.classList.remove("mudar-info");
  })
})();


let timeout = setTimeout(() => {
  proximaImg();
}, 2000);

//Código copiado e alterado 

let touchstartX = 0;
let touchendX = 0;

const zona = document.querySelector('#frame');

zona.addEventListener('touchstart', (e) => {
    touchstartX = e.touches[0].screenX;
});

zona.addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].screenX;
    handleGesto();
}); 

function handleGesto() {
    if (touchendX > touchstartX) {
        voltarImg();
    }
    if (touchendX < touchstartX) {
        proximaImg();
    }
}