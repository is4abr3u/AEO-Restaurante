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
    navigate('/atendentes')
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button className="button" type="submit">Entrar</button>
      </form>
      <nav className="login-navigation" aria-label="Navegação pelas páginas">
        <h2>Ir para uma página</h2>
        <Link className="button" to="/signIn">Cadastrar-se</Link>
        <Link className="button" to="/mesas">Mesas</Link>
        <Link className="button" to="/pedidos">Pedidos</Link>
        <Link className="button" to="/bebidas">Bebidas</Link>
        <Link className="button" to="/pratos">Pratos</Link>
        <Link className="button" to="/atendentes">Atendentes</Link>
      </nav>
    </div>
  )
}
