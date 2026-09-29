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
        const id = Number(req.params.id)

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


router.put("/alterar/:id", (req, res) => {
    try {
        const id = Number(req.params.id)

        const {nome, entrada, prato,  bebida, quantidade, formadepagamento, pago,} = req.body

      const  pedidos = BancoDeDados.find(it => it.id ===id)
      
      if(!pedidos){
        res.status(404).send({message: "Pedido não encontrado"})
        return
      }

      pedidos.nome = nome
       pedidos.entrada = entrada
        pedidos.prato = prato
         pedidos.bebida = bebida
          pedidos.quantidade = quantidade
           pedidos.formadepagamento = formadepagamento
            pedidos.pago = pago

            res.status(200).send({message: "Pedido alterado com sucesso!"})
res.status(200).send()
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

router.delete("/deletar/:id", (req, res) => {
    try {
        const id = Number(req.params.id)

        const pedidos = BancoDeDados.findIndex(it => it.id ===id)

        if(pedidos === -1){
            res.status(404).send({message: "Pedido não encontrado"})
            return
        }

BancoDeDados.splice(pedidos, 1)


res.status(201).send({message: "Pedido deletado com sucesso"})        
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

router.post("/pagamento/:id", (req, res) => {
    try {
        const id = Number(req.params.id)

         const  pedidos = BancoDeDados.find(it => it.id ===id)
      
      if(!pedidos){
        res.status(404).send({message: "Pedido não encontrado"})
        return
      }

      pedidos.pago = true

      res.status(200).send({message: "Pagamento feito com sucesso"})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})



export default router