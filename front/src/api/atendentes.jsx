import api from './api'

export const buscarAtendentes = async () => {
    const response = await api.get('/v1/restaurante/atendentes/buscar')

    return response.data
}

export const atendentesDetalhe = async () => {
    const response = await api.get('/v1/restaurante/atendentes/detalhe')

    return response.data
}

export const criarAtendentes = async (id, nome, cpf, ativo, turno, telefone, Rep, email, senha) => {
    const response = await api.post('/v1/restaurante/atendentes/criar', { id, nome, cpf, ativo, turno, telefone, Rep, email, senha })

    return response.data
}

export const alterarAtendentes = async (id, nome, cpf, ativo, turno, telefone, Rep, email, senha) => {
    const response = await api.put('/v1/restaurante/atendentes/alterar', {id, nome, cpf, ativo, turno, telefone, Rep, email, senha })

    return response.data
}

export const deletarAtendente = async () => {
    const response = await api.delete('/v1/restaurante/atendentes/deletar')

    return response.data
}

export const loginAtendentes = async (email, senha) => {
    const body = { email, senha }
    const response = await api.post('/v1/restaurante/atendentes/login', body, {
        headers: { 'Content-Type': 'application/json' }
    })
    
    return response.data
}