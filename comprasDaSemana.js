const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const lista = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const produto = frm.inProduto.value;
  lista.push(produto);
  lista.sort();
  resp.innerText = "";
  lista.forEach((produto) => {
    const li = document.createElement("li");
    li.textContent = produto;
    resp.appendChild(li);
  });

  frm.reset();

  frm.btLimpar.addEventListener("click", () => {
    lista.length = 0; // Limpa a lista
    resp.innerText = ""; // Limpa todos os elementos filhos de pre
  });
});
