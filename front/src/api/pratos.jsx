import { data } from 'react-router-dom'
import api from './api'

//buscar
export const buscarPratos = async () => {
    const response = await api.get('v1/pratos/buscar')

    return response.data
}

//buscarum eai qual vai ser?
export const buscarumPrato = async () => {
    const response = await api.get('v1/pratos/buscarum')

    return response.data
}

//criar
export const criarPrato = async (id, nome, preco, categoria, descricao) => {
    const body = {id, nome, preco, categoria, descricao}

    const response = await api.post('v1/pratos/criar', body, {
        headers: {'Content-Type': 'application/json'}
    })

    response.data
}

//alterar
export const alterarPrato = async (id, nome, preco, categoria, descricao) => {
    const body = {id, nome, preco, categoria, descricao}

    const response = await api.put('v1/prato/alterar', body, {
        headers: {'Content-Type': 'application/json'}
    })}

//deletar
    export const deletePrato = async () => {
    const response = await api.delete('/v1/Prato/deletar')

    return response.data
}

    