const frm = document.querySelector("form"); // Obtém os elementos da página
const resp = document.querySelector("pre");

const itens = []; //Vetor global paraarmazenar os itens do pedido

frm.rbPizza.addEventListener("click", () => {
  // Quando o radio button é clicado
  frm.inBebida.className = "oculta"; // Oculta select das bebidas
  frm.inPizza.className = "exibe"; // Exibe select das pizzas
});

frm.rbBebida.addEventListener("click", () => {
  // Quando o button radio é clicado
  frm.inPizza.className = "oculta"; // Oculta select das pizzas
  frm.inBebida.className = "exibe"; // Exibe select das bebidas
});

frm.inDetalhes.addEventListener("focus", () => {
  // Quando o campo recebe o focu
  if (frm.rbPizza.checked) {
    // se radiobutton rbPizza estiver marcado
    const pizza = frm.inPizza.value; // Obtém o value do item selecionado
    // Uso do operador ternário, para indicar o número de sabores
    const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4;
    // Atributo placeholder exibe uma dica de preenchimento do campo
    frm.inDetalhes.placeholder = `Até ${num} sabores`;
  }
});

frm.inDetalhes.addEventListener("blur", () => {
  // Quando o campo perde o foco
  frm.inDetalhes.placeholder = ""; // Limpa a dica de preenchimento
});

frm.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita o envio do form
  let produto;
  if (frm.rbPizza.checked) {
    const num = frm.inPizza.selectedIndex; // Obtém o n° do item selecionado
    produto = frm.inPizza.options[num].text; // Texto do item selecionado
  } else {
    const num = frm.inBebida.selectedIndex;
    produto = frm.inBebida.options[num].text;
  }
  const detalhes = frm.inDetalhes.value; // Conteudo do inDetalhes
  itens.push(produto + " (" + detalhes + ")"); // Adiciona ao vetor
  resp.innerText = itens.join("\n"); // Exibe os itens do pedido com quebra de linha

  frm.reset(); // Limpa o form
  frm.rbPizza.dispatchEvent(new Event("click")); // Dispara click em rbPizza
});
