import { useEffect, useState } from 'react'
import { getAtendentes } from '../../api/atendentes'
import './style.css'

function Atendentes() {
    const [atendentes, setAtendentes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        let isMounted = true

        const loadAtendentes = async () => {
            try {
                const response = await getAtendentes()
                if (isMounted) {
                    setAtendentes(response.users)
                }
            } catch (requestError) {
                if (isMounted) {
                    setError(
                        requestError.response?.data?.message
                        || 'Não foi possível carregar a lista de atendentes.'
                    )
                }
            } finally {
                if (isMounted) {
                    setLoading(false)
                }
            }
        }

        loadAtendentes()

        return () => {
            isMounted = false
        }
    }, [])

    return (
        <main className="atendentes-page">
            <section className="atendente-card" aria-labelledby="atendente-title">
                <h1 id="atendente-title">Usuários</h1>
                {loading && <p role="status">Carregando usuários...</p>}
                {!loading && error && <p className="atendente-error" role="alert">{error}</p>}
                {!loading && !error && atendentes.length > 0 && (
                    <div className="atendente-table-wrapper">
                        <table className="atendente-table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {atendentes.map((atendente) => (
                                    <tr key={atendente.id}>
                                        <td>{atendente.id}</td>
                                        <td>{atendente.name}</td>
                                        <td>{atendente.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {!loading && !error && atendentes.length === 0 && (
                    <p>Nenhum usuário cadastrado.</p>
                )}
            </section>
        </main>
    )
}

export default Atendentes