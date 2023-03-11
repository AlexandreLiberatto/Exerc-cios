const frm = document.querySelector("form"); // Obtém od elementos da página
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
  // Cria um "ouvinte" de evento para o botão submit
  e.preventDefault(); // Evita o envio do form
  const modelo = frm.inModelo.value; // obtém o conteudo dos campos
  const ano = Number(frm.inAno.value);
  const preco = Number(frm.inPreco.value);
  // Chama as funções e atribui
  const classificacao = classificarVeiculo(ano);
  const entrada = calcularEntrada(preco, classificacao);
  const parcela = (preco - entrada) / 10; // Usa retorno da função para calculo
  resp1.innerText = modelo + " - " + classificacao; // Exibe as respostas
  resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`;
  resp3.innerText = `+ 10x de R$: ${parcela.toFixed(2)}`;
});

// Função recebe ano do veículo como parametro
const classificarVeiculo = (ano) => {
  const anoAtual = new Date().getFullYear(); // Obtém o ano atual
  let classif;
  if (ano == anoAtual) {
    // Condições para definir clasificação do veículo
    classif = "Novo";
  } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
    classif = "Seminovo";
  } else {
    classif = "Usado";
  }
  return classif; // Retorna a classificação
};

// Função recebe valor e estatus do veículo como parâmetro
const calcularEntrada = (valor, status) => 
  status == "Novo" ? valor * 0.5 : valor * 0.3
  // se for igual a Novo? primeiro valor caso for verdadeiro : segundo valor caso for falso
  
