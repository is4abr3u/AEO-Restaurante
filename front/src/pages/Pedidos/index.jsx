

import { useNavigate } from 'react-router-dom'
import './style.css'
import { useState, useEffect } from 'react'
import { buscarPedidos, criarPedido, alterarPedido, deletarPedido } from '../../api/pedidos'

function Pedidos() {
    const navigate = useNavigate()
    const [pedidos, setPedidos] = useState([]);
    const [id, setId] = useState(null);
    const [nome, setNome] = useState('');
    const [entrada, setEntrada] = useState('');
    const [prato, setPrato] = useState('');
    const [bebida, setBebida] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [formadepagamento, setFormadepagamento] = useState('');
    const [pago, setPago] = useState(false);

    // buscar: roda quando a tela abre
    useEffect(() => {
        const carregar = async () => {
            const response = await buscarPedidos()
            setPedidos(response)
        }
        carregar()
    }, [])

    const limpar = () => {
        setId(null)
        setNome('')
        setEntrada('')
        setPrato('')
        setBebida('')
        setQuantidade('')
        setFormadepagamento('')
        setPago(false)
    }

    // criar ou alterar (se tiver id é alterar)
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (id) {
            await alterarPedido(id, nome, entrada, prato, bebida, Number(quantidade), formadepagamento, pago)
        } else {
            await criarPedido(nome, entrada, prato, bebida, Number(quantidade), formadepagamento, pago)
        }

        setPedidos(await buscarPedidos())
        limpar()
    }

    // editar: joga os dados do pedido de volta no formulário
    const handleEditar = (pedido) => {
        setId(pedido.id)
        setNome(pedido.nome)
        setEntrada(pedido.entrada)
        setPrato(pedido.prato)
        setBebida(pedido.bebida)
        setQuantidade(pedido.quantidade)
        setFormadepagamento(pedido.formadepagamento)
        setPago(pedido.pago)
    }

    // deletar
    const handleDeletar = async (idPedido) => {
        await deletarPedido(idPedido)
        setPedidos(await buscarPedidos())
    }

    return (
        <>
            <div className='login-container'>
                <form className="login-form">
                    <h2>Pedido</h2>

                    <div className='input-group'>
                        <label htmlFor="nome">Nome</label>

                        <input type='text'
                            id='nome'
                            required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="entrada">Entrada</label>

                        <input type='text'
                            id='entrada'
                            value={entrada}
                            onChange={(e) => setEntrada(e.target.value)}
                        />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="prato">Prato</label>

                        <input type='text'
                            id='prato'
                            required
                            value={prato}
                            onChange={(e) => setPrato(e.target.value)}
                        />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="bebida">Bebida</label>

                        <input type='text'
                            id='bebida'
                            value={bebida}
                            onChange={(e) => setBebida(e.target.value)}
                        />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="quantidade">Quantidade</label>

                        <input type='number'
                            id='quantidade'
                            required
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                        />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="formadepagamento">Forma de pagamento</label>

                        <input type='text'
                            id='formadepagamento'
                            value={formadepagamento}
                            onChange={(e) => setFormadepagamento(e.target.value)}
                        />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="pago">Pago</label>

                        <input type='checkbox'
                            id='pago'
                            checked={pago}
                            onChange={(e) => setPago(e.target.checked)}
                        />
                    </div>

                    <button className='button'
                        type='submit'
                        onClick={handleSubmit}
                    > {id ? 'Alterar' : 'Salvar'} </button>

                    <button className='button back-button'
                        type='button'
                        onClick={() => navigate(-1)} > Voltar </button>
                </form>

                <div className='pedidos-lista'>
                    <h2>Lista de pedidos</h2>

                    {pedidos.map((pedido) => (
                        <div className='pedido-item' key={pedido.id}>
                            <p>Nome: {pedido.nome}</p>
                            <p>Entrada: {pedido.entrada}</p>
                            <p>Prato: {pedido.prato}</p>
                            <p>Bebida: {pedido.bebida}</p>
                            <p>Quantidade: {pedido.quantidade}</p>
                            <p>Pagamento: {pedido.formadepagamento}</p>
                            <p>Pago: {pedido.pago ? 'Sim' : 'Não'}</p>

                            <button className='button' type='button' onClick={() => handleEditar(pedido)}> Editar </button>
                            <button className='button' type='button' onClick={() => handleDeletar(pedido.id)}> Excluir </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Pedidos