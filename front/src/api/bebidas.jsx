import api from './api'

export const  getBebidas = async () => {
    const response = await api.get('/v1/restaurante/bebidas/buscar')
    return response.data 
}

export const getCurrentBebidas = async (id) => {
    const response = await api.get('/v1/restaurante/bebidas/detalhe/${id}')
    return response.data
}

export const createBebidas = async (nome, preco, tamanho, disponivel) => {
    const response = await api.post('/v1/restaurante/bebidas/criar', { 
        nome,
        preco,
        tamanho,
        disponivel
     })

    return response.data
}

export const updateCurrentBebidas = async (id,nome,tamanho,disponivel) => {
    const response = await api.put('/v1/restaurante/bebidas/alterar/${id}', { 
        nome,
        preco,
        tamanho,
        disponivel
     })

    return response.data
}

export const deleteCurrentBebidas = async (id) => {
    const response = await api.delete('/v1/restaurante/bebidas/deletar/${id}')

    return response.data
}