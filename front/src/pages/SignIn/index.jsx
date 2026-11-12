import './style.css'
import { useState } from 'react'

function SignIn() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
   const [cpf, setCpf] = useState('')

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Cadastre-se como atendente</h2>

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
          <label htmlFor="email">Email:</label>
          <input
            type="text"
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

        <button>Enviar</button>
        <button
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