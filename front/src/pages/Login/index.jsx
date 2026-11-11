import { useState } from 'react'
import './style.css'
import { loginAtendentes } from '../../api/atendentes'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await loginAtendentes(email, senha)
    localStorage.setItem('token', response.token)
    return navigate('/atendentes')
  }

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
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
        <p>Não possui conta? <Link className="signup" to="/signIn">Cadastre-se</Link></p>
        <button
            className="button"
            type="submit"
            onClick={handleSubmit}
        >Entrar</button>
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
