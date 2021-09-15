export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        if(tipoDeInput === 'dataNascimento'){
            input.parentElement.classList.add('input-container--invalido')
            if(input.validity.valueMissing === true){
                input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mensagensDeErro[tipoDeInput].valueMissing
            } else {
                input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
            }
        } else {
            input.parentElement.classList.add('input-container--invalido')
            input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
        }
    }
}

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },

    email: {
        valueMissing: 'O campo email não pode estar vazio.',
        typeMismatch: 'O email digitado não é valido.'
    },

    senha: {
        valueMissing: 'O campo senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos'
    },

    dataNascimento: {
        customError: 'Você deve ser maior que 18 anos para se cadastrar.',
        valueMissing: 'O campo de data de nascimento não pode estar vazio.'
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input)
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'customError',
    'patternMismatch'
]

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]){
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })

    return mensagem
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}

// var inputSenha = document.querySelector('#senha')
// console.log(inputSenha.validity);