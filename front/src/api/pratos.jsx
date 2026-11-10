import { data } from 'react-router-dom'
import api from './api'

//buscar
export const buscarUsers = async () => {
    const response = await api.get('v1/user/buscar')

    return response.data
}

//buscarum
export const buscarumUsers = async () => {
    const response = await api.get('v1/user/buscarum')

    return response.data
}

//criar
export const criarUser = async (name, email, password) => {
    const body = {name, email, password}

    const response = await api.post('v1/user/criar', body, {
        headers: {'Content-Type': 'application/json'}
    })

    response.data
}

//alterar
export const alterarUser = async (name, email, password) => {
    const body = {name, email, password}

    const response = await api.put('v1/user/alterar', body, {
        headers: {'Content-Type': 'application/json'}
    })}