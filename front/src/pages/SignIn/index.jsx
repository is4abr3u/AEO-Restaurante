import './style.css'
import { useState } from 'react'

function SignIn() {
    // Cada estado mantém o valor atual de um campo controlado pelo React.
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cpf, setCpf] = useState('')
    // Começa com "1", então a opção Ativo aparece marcada por padrão.
    const [ativo, setAtivo] = useState('1')
    const [turno, setTurno] = useState('')
    const [telefone, setTelefone] = useState('')
    const [rep, setRep] = useState('')
    // Estados usados para informar o resultado do envio e bloquear envios repetidos.
    const [erro, setErro] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [enviando, setEnviando] = useState(false)

    async function enviarCadastro(event) {
      // Evita o recarregamento da página padrão do formulário.
      event.preventDefault()
      setErro('')
      setMensagem('')
      setEnviando(true)

      try {
        // Envia os dados como JSON para a rota de cadastro de atendentes do backend.
        const response = await fetch('http://localhost:3000/api/v1/restaurante/atendentes/criar', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nome,
            cpf,
            // Os valores dos radios são strings no HTML; o backend recebe o número 0 ou 1.
            ativo: Number(ativo),
            turno,
            telefone,
            Rep: rep,
            email,
            senha
          })
        })

        // Lê a mensagem enviada pelo backend, tanto em caso de sucesso quanto de erro.
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.mensagem)
        }

        setMensagem(data.mensagem)
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
      <form className="login-form" onSubmit={enviarCadastro}>
        <h2>Cadastre-se como atendente</h2>

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

        <div className="input-group">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            required
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>

        <div className="input-group">
          <span>Ativo:</span>
          <div>
            {/* O mesmo name agrupa os radios; value define o número enviado ao backend. */}
            <input
              type="radio"
              id="ativo-sim"
              name="ativo"
              value="1"
              checked={ativo === '1'}
              onChange={(e) => setAtivo(e.target.value)}
            />
            <label htmlFor="ativo-sim">
            Ativo
            </label>
            <input
              type="radio"
              id="ativo-nao"
              name="ativo"
              value="0"
              checked={ativo === '0'}
              onChange={(e) => setAtivo(e.target.value)}
            />
            <label htmlFor="ativo-nao">
            Inativo
            </label>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="turno">Turno:</label>
          <input
            type="text"
            id="turno"
            required
            value={turno}
            onChange={(e) => setTurno(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            required
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="rep">Registro de empregado:</label>
          <input
            type="text"
            id="rep"
            required
            value={rep}
            onChange={(e) => setRep(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
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

export default SignIn