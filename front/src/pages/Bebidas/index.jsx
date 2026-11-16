
import './style.css'
import { useState } from 'react'
import { createBebidas } from '../../api/bebidas'

// Função principal responsável por cadastrar uma bebida.
function CriarBebidas() {

    // Estados que armazenam os valores digitados nos campos.
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [tamanho, setTamanho] = useState('')

    // Define o status inicial da bebida como disponível.
    const [disponivel, setDisponivel] = useState('1')

    // Estados utilizados para mostrar mensagens e controlar o envio.
    const [erro, setErro] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [enviando, setEnviando] = useState(false)

    // Função responsável por enviar os dados da bebida para o backend.
    async function enviarBebida(event) {

        // Impede que a página seja recarregada ao enviar o formulário.
        event.preventDefault()

        // Limpa as mensagens anteriores.
        setErro('')
        setMensagem('')

        // Informa que o cadastro está sendo enviado.
        setEnviando(true)

        try {
            // Chama a função da API e envia os dados da bebida.
            const data = await createBebidas(
                nome.trim(),
                Number(preco),
                tamanho.trim(),
                disponivel
            )

            // Mostra a mensagem de sucesso retornada pelo backend.
            setMensagem(data.message || 'Bebida cadastrada com sucesso.')

            // Limpa os campos após o cadastro.
            setNome('')
            setPreco('')
            setTamanho('')
            setDisponivel('1')

        } catch (error) {

            // Captura e mostra o erro retornado pela API.
            setErro(
                error.response?.data?.message ||
                error.message ||
                'Não foi possível cadastrar a bebida.'
            )

        } finally {

            // Libera o botão novamente, mesmo se acontecer um erro.
            setEnviando(false)
        }
    }

    return (
        // Container principal da página.
        <div className="login-container">

            {/* Formulário responsável pelo cadastro da bebida. */}
            <form className="login-form" onSubmit={enviarBebida}>

                <h2>Cadastrar bebida</h2>

                {/* Campo para informar o nome da bebida. */}
                <div className="input-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                {/* Campo para informar o preço da bebida. */}
                <div className="input-group">
                    <label htmlFor="preco">Preço:</label>
                    <input
                        type="number"
                        id="preco"
                        min="0.01"
                        step="0.01"
                        required
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </div>

                {/* Campo para informar o tamanho da bebida. */}
                <div className="input-group">
                    <label htmlFor="tamanho">Tamanho:</label>
                    <input
                        type="text"
                        id="tamanho"
                        placeholder="Ex.: 300ml, 500ml, 1L"
                        required
                        value={tamanho}
                        onChange={(e) => setTamanho(e.target.value)}
                    />
                </div>

                {/* Opções para definir se a bebida está disponível. */}
                <div className="input-group">
                    <span>Status:</span>
                    <div>

                        {/* Marca a bebida como disponível. */}
                        <input
                            type="radio"
                            id="disponivel-sim"
                            name="disponivel"
                            value="1"
                            checked={disponivel === '1'}
                            onChange={(e) => setDisponivel(e.target.value)}
                        />
                        <label htmlFor="disponivel-sim">
                            Disponível
                        </label>

                        {/* Marca a bebida como indisponível. */}
                        <input
                            type="radio"
                            id="disponivel-nao"
                            name="disponivel"
                            value="0"
                            checked={disponivel === '0'}
                            onChange={(e) => setDisponivel(e.target.value)}
                        />
                        <label htmlFor="disponivel-nao">
                            Indisponível
                        </label>
                    </div>
                </div>

                {/* Mostra a mensagem de erro, caso o cadastro falhe. */}
                {erro && <p role="alert">{erro}</p>}

                {/* Mostra a mensagem quando o cadastro é realizado. */}
                {mensagem && <p role="status">{mensagem}</p>}

                {/* Botão que envia os dados do formulário. */}
                <button type="submit" disabled={enviando}>
                    {enviando ? 'Enviando...' : 'Enviar'}
                </button>

                {/* Botão para voltar à página anterior. */}
                <button
                    type="button"
                    className="button back-button"
                    onClick={() => {}}
                >
                    Voltar
                </button>

            </form>
        </div>
    )
}

// Exporta o componente para ser utilizado em outras páginas.
export default CriarBebidas
