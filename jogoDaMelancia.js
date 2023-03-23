const frm = document.querySelector("form"); // Obtém os elementos da página
const respLista = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita o envio do form
  const nome = frm.inNome.value; // Obtém o nome
  const peso = Number(frm.inPeso.value);

  // Chama function que verifica se o peso já foi apostado
  if (verApostaExiste(peso)) {
    alert("Alguém já apostou este peso, informe outro...");
    frm.inPeso.focus();
    return;
  }

  if (localStorage.getItem("melanciaNome")) {
    // Se ouver dados em local storage...
    // Obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
    const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
    const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
    localStorage.setItem("melanciaNome", melanciaNome); // Salva os dados
    localStorage.setItem("melanciaPeso", melanciaPeso);
  } else {
    // Senão é a primeira aposta
    localStorage.setItem("melanciaNome", melanciaNome); // Salva os dados sem ";"
    localStorage.setItem("melanciaPeso", melanciaPeso);
  }

  mostrarApostas(); // Chama a function que mostra as apostas já salvas
  frm.reset(); // limpa o form
  frm.inNome.focus(); // Joga o foco do cursor no campo inNome
});

const verApostaExiste = (peso) => {
  if (localStorage.getItem("melanciaPeso")) {
    // Se existir dados em localStorage
    // Obtém seu conteúdo e a string é dividida em itens de vetor a cada ";"
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    // O peso deve ser convertido em strings, pois o vetor contém strings
    return pesos.includes(peso.toString());
  } else {
    return false;
  }
};

const mostrarApostas = () => {
  // Se não há apostas armazenadas no localStorage
  if (!localStorage.getItem("melanciaNome")) {
    // Limpa o espaço de exibição das apostas (para quando "limpar apostas")
    respLista.innerText = "";
    return; // Retorna "Não executa os comandos abaixo"
  }

  // Obtém os conteúdos das variáveis salvas no localStorage, separando-as
  // em elementos de vetor a cada ocorrência do ";"
  const nomes = localStorage.getItem("melanciaNome").split(";");
  const pesos = localStorage.getItem("melanciaPeso").split(";");

  let linhas = "";

  // Repetição para percorrer todod os elementos do vetor
  for (let i = 0; i < nomes.length; i++) {
    //concatena em linhas os nomes dos apostadores e suas apostas
    linhas += nomes[i] + " - " + pesos[i] + "gr \n";
  }

  // exibe as linhas (altera o conteúdo do elemento respLista)
  respLista.innerText = linhas;
};

// chama a function quando a página é carregada, para mostrar apostas salvas
window.addEventListener("load", mostrarApostas);

frm.addEventListener("click", () => {
  // Se não há apostas armazenadas em localStorage
  if (!localStorage.getItem("melanciaNome")) {
    alert("Não há apostas cadastradas");
    return; // retorna (não executa os comandos abaixo)
  }

  // Solicita o peso correto da meancia
  const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));

  // Se não informou, retorna
  if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
    return;
  }

  //Obtém os dados armazenados, separando-os em elementos de vetor
  const nomes = localStorage.getItem("melanciaNome").split(";");
  const pesos = localStorage.getItem("melanciaPeso").split(";");

  // Valor inicial para vencedor é o da primeira aposta
  let vencedorNome = nomes[0];
  let vencedorPeso = Number(pesos[0]);

  // Percorre as apostas
  for (let i = 1; i < nomes.length; i++) {
    // Calcula a diferença de peso do "vencedor" e da aposta atual
    const difVencedor = Math.abs(vencedorPeso - pesoCorreto);
    const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

    // Se a diferença da aposta atual (no for) for menor que a do "vencedor"
    if (difAposta < difVencedor) {
      vencedorNome = nomes[i]; // troca o "vencedor"
      vencedorPeso = Number(pesos[i]); // para este elemento
    }
  }

  // Monta mensagem com dados do vencedor
  let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr";
  mensagem += "\n-----------------------------------------------";
  mensagem += "\nVencedor: " + vencedorNome;
  mensagem += "\nAposta: " + vencedorPeso + "gr";
  alert(mensagem);

  frm.btLimpar.addEventListener("click", () => {
    //Solicita confirmação para excluir apostas
    if (confirm("Confirma exclusão de todas as apostas?")) {
      localStorage.removeItem("melanciaNome"); // remove as variáveis salvas
      localStorage.removeItem("melanciaPeso"); // em localStorage
      mostrarApostas(); // Exibe a listagem vazia
    }
  });
});
