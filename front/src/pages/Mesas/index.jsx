import './style.css'
import { useState } from 'react'

function CriarMesa() {
    // Cada estado mantém o valor atual de um campo controlado pelo React.
    const [qtdPessoas, setQtdPessoas] = useState('')
    const [qtdCriancas, setQtdCriancas] = useState('')
    const [area, setArea] = useState('')
    // Começa com "1", então a opção Disponível aparece marcada por padrão.
    const [disponivel, setDisponivel] = useState('1')
    // Estados usados para informar o resultado do envio e bloquear envios repetidos.
    const [erro, setErro] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [enviando, setEnviando] = useState(false)

    async function enviarMesa(event) {
      // Evita o recarregamento da página padrão do formulário.
      event.preventDefault()
      setErro('')
      setMensagem('')
      setEnviando(true)

      try {
        // Envia os dados como JSON para a rota de cadastro de mesas do backend.
        const response = await fetch('http://localhost:3000/api/v1/restaurante/mesas/criar', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            // Inputs type="number" retornam string no estado; converte para número.
            qtdpessoas: Number(qtdPessoas),
            qtdcriancas: Number(qtdCriancas),
            area: String(area),
            // Os valores dos radios são strings no HTML; o backend recebe o número 0 ou 1.
            disponivel: Number(disponivel)
          })
        })

        // Lê a mensagem enviada pelo backend, tanto em caso de sucesso quanto de erro.
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || data.mensagem || 'Falha ao cadastrar mesa.')
        }

        setMensagem(data.message || data.mensagem || 'Mesa cadastrada com sucesso.')
      } catch (error) {
        // Mostra a mensagem do backend ou um erro de conexão na interface.
        setErro(error.message || 'Não foi possível conectar ao servidor.')
      } finally {
        // Reabilita o botão mesmo se a requisição falhar.
        setEnviando(false)
      }
    }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={enviarMesa}>
        <h2>Cadastrar mesa</h2>

        <div className="input-group">
          <label htmlFor="qtdPessoas">Quantidade de pessoas:</label>
          <input
            type="number"
            id="qtdPessoas"
            min="1"
            required
            value={qtdPessoas}
            onChange={(e) => setQtdPessoas(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="qtdCriancas">Quantidade de crianças:</label>
          <input
            type="number"
            id="qtdCriancas"
            min="0"
            required
            value={qtdCriancas}
            onChange={(e) => setQtdCriancas(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="area">Área:</label>
          <input
            type="text"
            id="area"
            placeholder="Ex.: Varanda, Salão, Área externa"
            required
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>

        <div className="input-group">
          <span>Status:</span>
          <div>
            {/* O mesmo name agrupa os radios; value define o número enviado ao backend. */}
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

        {erro && <p role="alert">{erro}</p>}
        {mensagem && <p role="status">{mensagem}</p>}

        {/* Durante o envio, desabilita o botão e informa o estado da requisição. */}
        <button type="submit" disabled={enviando}>
          {enviando ? 'Enviando...' : 'Enviar'}
        </button>

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

export default CriarMesa