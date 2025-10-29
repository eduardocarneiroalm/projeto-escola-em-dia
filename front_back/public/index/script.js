// Pegando respostas do usuário

const respostasUsuario = {};

// Função para pegar a resposta da Questão 1
function pegarRespostaQ1() {
  // Seleciona o input do tipo radio que está marcado (checked)
  const resposta = document.querySelector('input[name="resposta-q1"]:checked');
  
  // Se nada estiver marcado, retorna null
  if (!resposta) return null;
  
  // Pega o texto do label correspondente
  const label = resposta.value;
  respostasUsuario.questao1 = label;
}

function pegarRespostaQ2() {
    const resposta = document.querySelector('input[name="resposta-q2"]:checked');

    if (!resposta) return null;
    const label = resposta.value;
    respostasUsuario.questao2 = label;
}

function pegarRespostaQ3() {
    const resposta = document.querySelector('input[name="resposta-q3"]:checked');

    if (!resposta) return null;

    const label = resposta.value;
    respostasUsuario.questao3 = label;
}

// Adiciona um evento de clique ao botão para pegar as respostas
const botao = document.querySelector("button");
botao.addEventListener("click", async () => {
  pegarRespostaQ1();
  pegarRespostaQ2();
  pegarRespostaQ3();
    console.log(respostasUsuario);

    //pedindo as respostas ao servidor
    const resposta = await fetch("/nivel", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(respostasUsuario)
})
    //dados recebidos do servidor
    const dados = await resposta.json();

    // Salva o resultado no localStorage (pra passar pra próxima página)
    localStorage.setItem("resultado", JSON.stringify(dados));

// Vai para a página de resultado
    window.location.href = "/resultado.html";
});