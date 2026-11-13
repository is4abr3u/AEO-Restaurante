import api from './api'

// Busca os atendentes; a API envia a lista no campo "mensagem".
export const buscarAtendentes = async () => {
    const response = await api.get('/v1/restaurante/atendentes/buscar')
    return response.data.mensagem
}