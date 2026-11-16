import { useEffect, useState } from 'react'
import { buscarAtendentes } from '../../api/atendentes'
import './style.css'

function AtendentesPage() {
    // Estados da tela: dados carregados, indicador de carregamento e mensagem de erro.
    const [atendentes, setAtendentes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    // Busca os atendentes uma vez, quando a página é aberta.
    useEffect(() => {
        let isMounted = true

        const carregarAtendentes = async () => {
            try {
                const dados = await buscarAtendentes()
                if (isMounted) setAtendentes(dados)
            } catch (requestError) {
                if (isMounted) {
                    setError(
                        requestError.response?.data?.mensagem
                        || requestError.response?.data?.message
                        || 'Não foi possível carregar a lista de atendentes.'
                    )
                }
            } finally {
                if (isMounted) setLoading(false)
            }
        }

        carregarAtendentes()
        return () => { isMounted = false }
    }, [])

    return (
        <main className="atendentes-page">
            <section className="atendente-card" aria-labelledby="atendentes-title">
                <h1 id="atendentes-title">Atendentes</h1>

                {loading && <p role="status">Carregando atendentes...</p>}
                {!loading && error && <p className="atendente-error" role="alert">{error}</p>}

                {/* A tabela só aparece quando a busca termina sem erro e há dados. */}
                {!loading && !error && atendentes.length > 0 && (
                    <div className="atendente-table-wrapper">
                        <table className="atendente-table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Turno</th>
                                </tr>
                            </thead>
                            <tbody>
                                {atendentes.map((atendente) => (
                                    <tr key={atendente.id}>
                                        <td>{atendente.id}</td>
                                        <td>{atendente.nome}</td>
                                        <td>{atendente.email}</td>
                                        <td>{atendente.turno || 'Não informado'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {!loading && !error && atendentes.length === 0 && (
                    <p>Nenhum atendente cadastrado.</p>
                )}
            </section>
        </main>
    )
}

export default AtendentesPage
