import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

export const handleNovoItem = (evento) => {
    evento.preventDefault()
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const calendario = document.querySelector('[data-form-date]')
    
    const valor = input.value
    const data = moment(calendario.value).format('DD/MM/YYYY')

    const dados = {
        valor, 
        data
    }

    const tarefa = criarTarefa(dados)

    const tarefasAtualizado = [...tarefas, dados]

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizado))

    lista.appendChild(tarefa)
    input.value = " "

}

export const criarTarefa = ({valor, data}) => {

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${data} - ${valor}</p> `

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa
}
