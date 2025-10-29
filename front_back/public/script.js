const telaLoading = document.getElementById("tela-loading");
const telaInicial = document.getElementById("tela-inicial");
const telaPrincipal = document.getElementById("tela-principal");
const btnEntrar = document.getElementById("btn-entrar");

window.addEventListener("load", () => {
  setTimeout(() => {
    telaLoading.classList.remove("visivel");
    telaLoading.style.opacity = 0;
    setTimeout(() => {
      telaLoading.classList.add("oculto");
      telaInicial.classList.remove("oculto");
      telaInicial.classList.add("visivel");
    }, 800);
  }, 2000);
});

btnEntrar.addEventListener("click", () => {
  telaInicial.classList.remove("visivel");
  telaInicial.style.opacity = 0;
  setTimeout(() => {
    telaInicial.classList.add("oculto");
    telaPrincipal.classList.remove("oculto");
    telaPrincipal.classList.add("visivel");
  }, 800);
});
