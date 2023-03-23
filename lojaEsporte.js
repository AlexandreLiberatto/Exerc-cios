const frm = document.querySelector("form")
const imClube = document.querySelector("#imgClube")
const divTitulo = document.querySelector("#divTitulo")

const trocarClube = () => {

    let clube // variável que ira receber o ome do clube

    if (frm.rbBrasil.checked) { // checked verifica qual input radio está selecionado
        clube = "Brasil"
    } else if (frm.rbPelotas.checked) {
        clube = "Pelotas"
    } else {
        clube = "Farropilha"
    }

    // Define as classes de dvTitulo: row e cores do clube
    divTitulo.className = `row cores-${clube}`

    // Modifica a imagem de acordo com a seleção do cliente
    imClube.src = `img/${clube.toLowerCase()}.png`
    imClube.className = "img-fluid" // Muda o estilo para exibir a imagem
    imClube.alt = `Símbolo do ${clube}` // Modifica o atributo alt

    localStorage.setItem("clube", clube)  // Salva no navegador a escolha do cliente
}

// Associa ao evento change de cada botão do form a função tracarClube
frm.rbBrasil.addEventListener("change", trocarClube)
frm.rbPelotas.addEventListener("change", trocarClube)
frm.rbFarroupilha.addEventListener("change", trocarClube)

const verificarClube = () => {
    if (localStorage.getItem("clube")) { // Se já estiver salvo algum clube...
        const clube = localStorage.getItem("clube") // Obtém o nome do clube

        if (clube == "Brasil") {  // Conforme o clube, marca checked
            frm.rbBrasil.checked = true
        } else if (clube == "Pelotas") {
            frm.rbPelotas.checked = true
        } else {
            frm.rbFarroupilha.checked = true
        }
        trocarClube() // Chama function que troca imagem e cores
    }
}

// Ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube)