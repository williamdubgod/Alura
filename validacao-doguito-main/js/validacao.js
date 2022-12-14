export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: "O campo nome não pode estar vazio."
    },
    email: {
        valueMissing: "O campo email não pode estar vazio.",
        typeMismatch: "O E-Mail digitado não é valido."
    },
    senha: {
        valueMissing: "O campo de senha não pode estar vazio.",
        patternMismatch: "A senha deve conter entre 6 a 12 caracteres com pelo menos uma letra minúscula e uma maiúscula sem o uso de símbolos"
    },
    dataNascimento: {
        valueMissing: "O campo de data de nascimento não pode estar vazio.",
        customError: "Você deve ser maior de 18 anos para se cadastrar."
    }

}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

/*const dataNascimento = document.querySelector("#nascimento")

dataNascimento.addEventListener('blur', (evento) =>{
    validaDataNascimento(evento.target)
}) */

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.valid[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })

    return mensagem
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!maiorQue18(dataRecebida)) {
        mensagem = "Você deve ser maior que 18 anos para se cadastrar."
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCYear())

    return dataMais18 <= dataAtual
}

function validaCPF(input) {
    const cpfFormatado = input.value.replace(/\D/g, '')
    let mensagem = ''

    input.setCustomValidity(mensagem)
}