const elementosReveal = document.querySelectorAll(".reveal");

const observador = new IntersectionObserver(function (entradas, observador) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("ativo");
    }
  });
});

elementosReveal.forEach(function (elemento) {
  observador.observe(elemento);
});

