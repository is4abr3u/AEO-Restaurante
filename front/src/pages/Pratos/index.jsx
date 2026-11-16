import { useCallback, useEffect, useState } from 'react'
import {
    alterarPrato,
    buscarPratos,
    criarPrato,
    deletePrato,
} from '../../api/pratos'
import './style.css'

function Pratos() {
    const [pratos, setPratos] = useState([])
    const [form, setForm] = useState({
      id: null,
      nome: '',
      preco: '',
      categoria: '',
      descricao: '',
    })
    const [carregando, setCarregando] = useState(true)
    const [salvando, setSalvando] = useState(false)
    const [erro, setErro] = useState('')
    const [mensagem, setMensagem] = useState('')

    const carregarPratos = useCallback(async () => {
      try {
        const resultado = await buscarPratos()
        if (!Array.isArray(resultado)) {
          throw new Error('A resposta do servidor não contém uma lista de pratos.')
        }
        setPratos(resultado)
        setErro('')
      } catch (error) {
        setErro(error.response?.data?.mensagem || error.message)
      } finally {
        setCarregando(false)
      }
    }, [])

    useEffect(() => {
      carregarPratos()
    }, [carregarPratos])

    const handleChange = (event) => {
      const { name, value } = event.target
      setForm((formAtual) => ({ ...formAtual, [name]: value }))
    }

    const limparFormulario = () => {
      setForm({ id: null, nome: '', preco: '', categoria: '', descricao: '' })
    }

    const handleSubmit = async (event) => {
      event.preventDefault()
      setSalvando(true)
      setErro('')
      setMensagem('')

      try {
        if (form.id === null) {
          await criarPrato(form.nome, form.preco, form.categoria, form.descricao)
          setMensagem('Prato cadastrado com sucesso.')
        } else {
          await alterarPrato(form.id, form.nome, form.preco, form.categoria, form.descricao)
          setMensagem('Prato atualizado com sucesso.')
        }
        limparFormulario()
        await carregarPratos()
      } catch (error) {
        setErro(error.response?.data?.mensagem || error.message)
      } finally {
        setSalvando(false)
      }
    }

    const editarPrato = (prato) => {
      setForm({
        id: prato.id,
        nome: prato.nome,
        preco: prato.preco,
        categoria: prato.categoria,
        descricao: prato.descricao,
      })
      setMensagem('')
      setErro('')
    }

    const removerPrato = async (id) => {
      if (!window.confirm('Deseja excluir este prato?')) return

      setErro('')
      setMensagem('')
      try {
        await deletePrato(id)
        setMensagem('Prato excluído com sucesso.')
        if (form.id === id) limparFormulario()
        await carregarPratos()
      } catch (error) {
        setErro(error.response?.data?.mensagem || error.message)
      }
    }

    return (
      <main className="pratos-page">
        <h1>Pratos</h1>

        <form className="prato-form" onSubmit={handleSubmit}>
          <h2>{form.id === null ? 'Novo prato' : 'Editar prato'}</h2>
          <div className="prato-form-grid">
            <label>
              Nome
              <input name="nome" value={form.nome} onChange={handleChange} required />
            </label>
            <label>
              Preço
              <input
                name="preco"
                type="number"
                min="0"
                step="0.01"
                value={form.preco}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Categoria
              <input name="categoria" value={form.categoria} onChange={handleChange} required />
            </label>
            <label>
              Descrição
              <input name="descricao" value={form.descricao} onChange={handleChange} required />
            </label>
          </div>
          <div className="prato-form-actions">
            <button type="submit" disabled={salvando}>
              {salvando ? 'Salvando...' : form.id === null ? 'Cadastrar prato' : 'Salvar alterações'}
            </button>
            {form.id !== null && (
              <button type="button" className="prato-button-secondary" onClick={limparFormulario}>
                Cancelar
              </button>
            )}
          </div>
        </form>

        {erro && <p className="prato-message prato-error">{erro}</p>}
        {mensagem && <p className="prato-message">{mensagem}</p>}

        <section className="prato-list">
          <h2>Cardápio</h2>
          {carregando ? (
            <p>Carregando pratos...</p>
          ) : erro && pratos.length === 0 ? null : pratos.length === 0 ? (
            <p>Nenhum prato cadastrado.</p>
          ) : (
            <div className="prato-list-grid">
              {pratos.map((prato) => (
                <article className="prato-card" key={prato.id}>
                  <div>
                    <h3>{prato.nome}</h3>
                    <p className="prato-category">{prato.categoria}</p>
                  </div>
                  <p>{prato.descricao}</p>
                  <strong>R$ {prato.preco}</strong>
                  <div className="prato-card-actions">
                    <button type="button" onClick={() => editarPrato(prato)}>Editar</button>
                    <button
                      type="button"
                      className="prato-button-secondary"
                      onClick={() => removerPrato(prato.id)}
                    >
                      Excluir
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    )
}

export default Pratos