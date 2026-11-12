import { useEffect, useState } from 'react'
import { buscarAtendentes } from '../../api/atendentes'
import './style.css'

function Atendentes() {

    if (error) return <p>{error}</p>

    return (
        <main className="atendentes-page">
            <h1>Usuários</h1>
            <table className="atendente-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Ativo</th>
                        <th>Turno</th>
                        <th>Telefone</th>
                        <th>REP</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {atendentes.map((atendentes) => (
                        <tr key={atendentes.id}>
                            <td>{atendentes.id}</td>
                            <td>{atendentes.nome}</td>
                            <td>{atendentes.cpf}</td>
                            <td>{atendentes.ativo}</td>
                            <td>{atendentes.turno}</td>
                            <td>{atendentes.telefone}</td>
                            <td>{atendentes.rep}</td>
                            <td>{atendentes.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}

export default Atendentes