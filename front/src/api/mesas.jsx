import api from './api'

export const getMesas = async () => {
    const response = await api.get('/v1/restaurante/mesas/buscar')

    return response.data
}

export const getCurrentMesas = async () => {
    const response = await api.get('/v1/restaurante/mesas/detalhe')

    return response.data
}

export const createMesas = async (qtdpessoas, area, qtdcriancas, disponivel) => {
    const response = await api.post('/v1/restaurante/mesas/criar', { qtdpessoas, area, qtdcriancas, disponivel })

    return response.data
}

export const updateCurrentMesas = async (qtdpessoas,area,salao,qtdcriancas,disponivel) => {
    const response = await api.put('/v1/restaurante/mesas/alterar', { qtdpessoas,area,salao,qtdcriancas,disponivel
     })

    return response.data
}

export const deleteCurrentMesas = async () => {
    const response = await api.delete('/v1/restaurante/mesas/deletar')

    return response.data
}