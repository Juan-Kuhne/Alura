export default BotaoDeleta

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'Deletar'
    botaoDeleta.classList.add('check-button')
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target
    const removerTarefa = botaoDeleta.parentElement

    removerTarefa.remove()
}