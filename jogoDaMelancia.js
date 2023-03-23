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
  } else { // Senão é a primeira aposta
    localStorage.setItem("melanciaNome", melanciaNome) // Salva os dados sem ";"
    localStorage.setItem("melanciaPeso", melanciaPeso)
  }

  mostrarApostas() // Chama a function que mostra as apostas já salvas
  frm.reset() // limpa o form
  frm.inNome.focus() // Joga o foco do cursor no campo inNome
});

const verApostaExiste = (peso) => {
   if (localStorage.getItem("melanciaPeso")) {  // Se existir dados em localStorage
  // Obtém seu conteúdo e a string é dividida em itens de vetor a cada ";"
   const pesos = localStorage.getItem("melanciaPeso").split(";")

   // O peso deve ser convertido em strings, pois o vetor contém strings
   return pesos.includes(peso.toString())
   } else {
    return false
   }
}
