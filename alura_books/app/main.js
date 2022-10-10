let livros = [];
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()
const inserirLivros = document.querySelector("#livros")
const valorTotalLivros = document.querySelector("#valor_total_livros_disponiveis")

const botoes = document.querySelectorAll(".btn")
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros))

let btnOrdenarPreco = document.querySelector("#btnOrdenarPorPreco");
btnOrdenarPreco.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
   let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
   exibirLivros(livrosOrdenados)
}


function filtrarLivros() {
    const btnClicado = document.getElementById(this.id);
    const categoria = btnClicado.value;
    let livrosFiltrados = categoria == "disponivel" ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirLivros(livrosFiltrados);
    if (categoria == "disponivel") {
        const valorTotal = calcularValorLivros(livrosFiltrados)
        exibirValorTotalLivros(valorTotal)
    }
}

function calcularValorLivros(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalLivros(valorTotal) {
    valorTotalLivros.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endPointDaAPI);
    livros = await res.json();
    let livrosDesconto = aplicarDesconto(livros);
    exibirLivros(livrosDesconto);
}

function exibirLivros(listaDeLivros) {
    valorTotalLivros.innerHTML = ""
    inserirLivros.innerHTML = ""
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? "livro_imagens" : "livro_imagens indisponivel"
        inserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
        </div>
        `
    });
}

function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosDesconto;
}
