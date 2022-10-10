console.log("Trabalhando com variáveis");

//consts são variáveis imutáveis, e let são mutáveis.

let nome = "William";
let sobrenome = "Vulcano";
const nomeInteiro = (`${nome} ${sobrenome}`);
let idade; // declarando a variável
idade = 22; // atribuindo valor
console.log(`Eu sou ${nomeInteiro} e tenho ${idade} anos`);

const idadeSomada = idade + 2;
console.log(idadeSomada);

// O JS consegue interpretar o texto e fazer operações matemáticas, exceto com a soma, que junta as strings, exemplo abaixo.
console.log("10" / "2");

// Para soma utilizamos a propriedade parseInt que converte strings para números inteiros ou parseFloat para valores não inteiros, como no exemplo abaixo.
console.log(parseInt("2") + parseInt("2"));

console.log(`Trabalhando com listas`);

const listaDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

listaDestinos.push("Amazonas") //adicionando item à lista após ela ser criada.
console.log(listaDestinos);

let idadeComprador = 15;
let estaAcompanhado = true;
let temPassagem = false;

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Compra aprovada!");
    listaDestinos.splice(1, 1); //removendo UM intem da lista, na esquerda passamos o índice e na direita a quantidade de itens que vamos remover.
    temPassagem = true;
} else {
    console.log("Comprador menor de idade ou desacompanhado.");
    temPassagem = false;
} 

let podeComprar = ((idadeComprador >= 18 || estaAcompanhado == true) && (temPassagem == true)) 

i = 0;
let destinoExiste = false;
let destino = "Salvador";

// Usando While

/* while (i < listaDestinos.length) {
    if (destino == listaDestinos[i]) {
        console.log("Passagem disponível");
        destinoExiste = true;
        break;
    } 
    i += 1;
} */

// Usando FOR

for(let i = 0; i < listaDestinos.length; i++) {
    if (destino == listaDestinos[i]) {
        console.log("Passagem disponível");
        destinoExiste = true;
    }
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa viagem!");
} else {
    console.log("Desculpe, você não pode embarcar.");
}

console.log(listaDestinos);
console.log(listaDestinos[1]); //exibindo o SEGUNDO item da minha lista.

