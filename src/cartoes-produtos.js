/*<section class="imoveis">
<div class="imoveis-container">
  <img src="#" alt="">
  <div class="info-imovel">
    <div class="container-visual">
      <span id="preco">R$4999</span>
      <button aria-label="Favoritar" ><img src="./svgs/heart-svgrepo-com.svg" class="icone" alt=""></button>
    </div>
    <span id="extras">Lorem ipsum</span>
    <span id="localizacao">Localizacao 1</span>
  </div>
</div>
</section>*/

import favorito from "./svgs/coracao.svg";

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

const container = document.querySelector("#container-cards");

for (let i = 0; i < 16; i ++) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const info = document.createElement("div");
  const infosuperior = document.createElement("div");
  const preco = document.createElement("span");
  const botao = document.createElement("button");
  const favoritar = document.createElement("img");
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
  img.src = cardAleatorio();
  preco.classList.add("preco");
  preco.textContent = `R$ ${precoAleatorio()}`;
  botao.classList.add("favoritar");
  botao.ariaLabel = "Favoritar";
  favoritar.src = favorito;
  favoritar.classList.add("icone");
  extras.classList.add("extras");
  localizacao.classList.add("localizacao");
  localizacao.textContent = `Localização ${i}`;

  container.appendChild(card);
  card.appendChild(img);
  card.appendChild(info);
  info.appendChild(infosuperior);
  infosuperior.appendChild(preco);
  infosuperior.appendChild(botao);
  botao.appendChild(favoritar);
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
}

function precoAleatorio() {
  const preco = Math.floor(Math.random() * 10000 + 1000);
  return preco;
}

function cardAleatorio() {
  const cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];
  return cards[Math.floor(Math.random()* 10)];
}

