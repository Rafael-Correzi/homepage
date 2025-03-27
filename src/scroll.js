const escondidos = document.querySelectorAll('.escondido');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("mostrar");
    }
    else {
      e.target.classList.remove("mostrar");
    }
  });
});


escondidos.forEach((elemento) => {
  observador.observe(elemento);
});

