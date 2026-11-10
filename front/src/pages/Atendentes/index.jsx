import { useEffect, useState } from 'react'
import { getAtendentes } from '../../api/atendentes'
import './style.css'

function Atendentes() {
    const [atendentes, setAtendentes] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        getAtendentes()
            .then((response) => setAtendentes(response.Atendentes))
            .catch(() => setError('Não foi possível carregar a lista de atendentes.'))
    }, [])

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
                    {atendentes.map((a) => (
                        <tr key={a.id}>
                            <td>{a.id}</td>
                            <td>{a.nome}</td>
                            <td>{a.cpf}</td>
                            <td>{a.ativo}</td>
                            <td>{a.turno}</td>
                            <td>{a.telefone}</td>
                            <td>{a.rep}</td>
                            <td>{a.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}

export default Atendentes