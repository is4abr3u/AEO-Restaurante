import api from './api'

export const buscarPratos = async () => {
    const response = await api.get('v1/restaurante/pratos/buscar')
    return response.data.mensagem
}

export const buscarumPrato = async (id) => {
    const response = await api.get(`v1/restaurante/pratos/buscarum/${id}`)
    return response.data.mensagem
}

export const criarPrato = async (nome, preco, categoria, descricao) => {
    const body = {nome, preco, categoria, descricao}
    const response = await api.post('v1/restaurante/pratos/criar', body, {
        headers: {'Content-Type': 'application/json'}
    })
    return response.data
}

export const alterarPrato = async (id, nome, preco, categoria, descricao) => {
    const body = {id, nome, preco, categoria, descricao}
    const response = await api.put(`v1/restaurante/pratos/alterar/${id}`, body, {
        headers: {'Content-Type': 'application/json'}
    })
    return response.data
}

export const deletePrato = async (id) => {
    const response = await api.delete(`v1/restaurante/pratos/deletar/${id}`)
    return response.data
}