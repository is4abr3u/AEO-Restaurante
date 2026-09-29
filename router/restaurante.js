import express from 'express'
import BancoDeDados from '../repository/pedidos.js'

const router = express.Router()

router.get("/buscar", (req, res) => {
    try {
        res.status(200).send({message: BancoDeDados})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

router.get("/buscarum/:id", (req, res) => {
    try {
        const id = req.params.id

        const pedido = BancoDeDados.find(it => it.id ===id)

        if(!pedido){
            res.status(404).send({message: "Pedido não encontrado"})
            return
        }

        res.status(200).send({ message: pedido})

    } catch (error) {
        res.status(500).send({message: error.message})
    }
})


router.post("/criar", (req, res) => {
    try {
        const {id, nome, entrada, prato,  bebida, quantidade, formadepagamento, pago,  } = req.body

        if(!id || !nome || !entrada || !prato  || !bebida || !quantidade || !formadepagamento || !pago ){
            res.status(400).send({message: "Parâmetros inválidos"})
            return
        }

        const pedidos =  {id, nome, entrada, prato,  bebida, quantidade, formadepagamento, pago, }

        BancoDeDados.push(pedidos)

    res.status(200).send({message: "Pedido feito com sucesso"})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})


router.put("/alterar", (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})


router.delete("/deletar", (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})


router.post("/pagamento", (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})


export default router