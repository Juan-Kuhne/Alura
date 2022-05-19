import { criaData } from "./criaData.js"
import { removeDatasRepetidas, ordenaDatas } from "../service/data.js"

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = " "
    const datasUnicas = removeDatasRepetidas(tarefasCadastradas)
    ordenaDatas(datasUnicas)

    datasUnicas.forEach((dia) => {
        lista.appendChild(criaData(dia))
    })
}
