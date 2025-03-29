import favorito from "./svgs/coracao.svg";
import favoritoPreenchido from "./svgs/coracao-preenchido.svg";

import card1 from "./imagens/card1.jpg";
import card2 from "./imagens/card2.jpg";
import card3 from "./imagens/card3.jpg";
import card4 from "./imagens/card4.jpg";
import card5 from "./imagens/card5.jpg";
import card6 from "./imagens/card6.jpg";
import card7 from "./imagens/card7.jpg";
import card8 from "./imagens/card8.jpg";
import card9 from "./imagens/card9.jpg";
import card10 from "./imagens/card10.jpg";
import medida from "./svgs/medida.svg";
import quarto from "./svgs/quarto.svg";
import carro from "./svgs/carro.svg";

const container = document.querySelector("#container-cards");
const botao = document.querySelector("#carregar");

function contar() {
  let contador = 1;

  function incrementar() {
    return contador++;
  }

  return incrementar;
}

function alternarFavorito() {
  let alternador = false;

  function alternar() {
    return alternador ? alternador = false : alternador = true;
  }

  return alternar;
}

let contador = contar();
let alternadorFavorito = alternarFavorito();

function carregarCards() {
  for (let i = 0; i < 15; i++) {
    const card = document.createElement("div");
    const img = document.createElement("img");
    const info = document.createElement("div");
    const infosuperior = document.createElement("div");
    const preco = document.createElement("span");
    const botao = document.createElement("button");
    const favoritar = document.createElement("img");
    const favoritarPreenchido = document.createElement("img");
    const extras = document.createElement("span");
    const localizacao = document.createElement("span");
    const infoExtra = document.createElement("div");
    const tamanho = document.createElement("div");
    const quartos = document.createElement("div");
    const vagas = document.createElement("div");
    const tamanhoIcone = document.createElement("img");
    const quartosIcone = document.createElement("img");
    const vagasIcone = document.createElement("img");
    const tamanhoSpan = document.createElement("span");
    const quartosSpan = document.createElement("span");
    const vagasSpan = document.createElement("span");
    card.classList.add("card");
    info.classList.add("info-imovel");
    infosuperior.classList.add("info-superior");
    img.classList.add("img-card");
    img.loading = "lazy";
    img.src = cardAleatorio();
    preco.classList.add("preco");
    preco.textContent = `R$ ${precoAleatorio(7000)}`;
    botao.classList.add("favoritar");
    botao.ariaLabel = "Favoritar";
    favoritar.src = favorito;
    favoritarPreenchido.src = favoritoPreenchido;
    favoritar.classList.add("icone");
    favoritar.classList.add("coracao");
    favoritarPreenchido.classList.add("icone");
    favoritarPreenchido.classList.add("coracao-preenchido");
    extras.classList.add("extras");
    extras.textContent = `Condomínio: R$ ${precoAleatorio(
      3000
    )} IPTU: R$ ${precoAleatorio(900)}`;
    localizacao.classList.add("localizacao");
    localizacao.textContent = `Localização ${contador()}`;
    infoExtra.classList.add("div-icones");
    tamanho.classList.add("icone-info");
    quartos.classList.add("icone-info");
    vagas.classList.add("icone-info");
    tamanhoIcone.classList.add("icones-imoveis");
    tamanhoIcone.src = medida;
    quartosIcone.classList.add("icones-imoveis");
    quartosIcone.src = quarto;
    vagasIcone.classList.add("icones-imoveis");
    vagasIcone.src = carro;
    tamanhoSpan.textContent = `${tamanhoAleatorio(300, 30, "tamanho")} m²`;
    quartosSpan.textContent = tamanhoAleatorio(5, 1, "quarto");
    vagasSpan.textContent = tamanhoAleatorio(4, 0, "vaga");

    container.appendChild(card);
    card.appendChild(img);
    card.appendChild(info);
    info.appendChild(infosuperior);
    infosuperior.appendChild(preco);
    infosuperior.appendChild(botao);
    botao.appendChild(favoritar);
    botao.appendChild(favoritarPreenchido);
    info.appendChild(extras);
    info.appendChild(localizacao);
    info.appendChild(infoExtra);
    infoExtra.appendChild(tamanho);
    infoExtra.appendChild(quartos);
    infoExtra.appendChild(vagas);
    tamanho.appendChild(tamanhoIcone);
    tamanho.appendChild(tamanhoSpan);
    quartos.appendChild(quartosIcone);
    quartos.appendChild(quartosSpan);
    vagas.appendChild(vagasIcone);
    vagas.appendChild(vagasSpan);

    botao.addEventListener("click", () => {
      alternadorFavorito() ? favoritarPreenchido.classList.add("preencher") : favoritarPreenchido.classList.remove("preencher");
    })
  }
}

function precoAleatorio(max) {
  const preco = Math.floor(Math.random() * max + max / 10);
  return preco.toLocaleString(undefined);
}

function cardAleatorio() {
  const cards = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
  ];
  return cards[Math.floor(Math.random() * 10)];
}

function tamanhoAleatorio(max, min, tipo = "tamanho") {
  let num = Math.floor(Math.random() * (max - min + 1) + min);
  if (tipo === "tamanho") {
    return num;
  }
  if (num === 0) {
    return "--";
  }
  if (num > 1) {
    return num + " " + tipo + "s";
  }
  if (num === 1) {
    return num + " " + tipo;
  }
}

(function() {
  botao.addEventListener("click", carregarCards);
})();

carregarCards();
