import ServicePedidos from '../service/pedidos.js'

class  ControllerPedidos{

async Buscar(req, res) {
    try {
 
        const pedidos = await ServicePedidos.Buscar()
 
        res.status(200).send({message: pedidos})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

async Buscarum (req, res)  {
    try {
        const id = req.params.id

        const pedidos = await ServicePedidos.Buscarum(id)
      
        res.status(200).send({ message: pedidos})

    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

async Criar (req, res)  {
    try {
        const {nome, entrada, prato,  bebida, quantidade, formadepagamento, pago,  } = req.body

       await ServicePedidos.Criar(nome, entrada, prato,  bebida, quantidade, formadepagamento, pago, )

    res.status(200).send({message: "Pedido feito com sucesso"})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

async Alterar(req, res)  {
    try {
        const id = Number(req.params.id)

        const {nome, entrada, prato,  bebida, quantidade, formadepagamento, pago,} = req.body

await ServicePedidos.Alterar(id, nome, entrada, prato,  bebida, quantidade, formadepagamento, pago,) 
     

            res.status(200).send({message: "Pedido alterado com sucesso!"})
res.status(200).send()
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

async Deletar (req, res)  {
    try {
        const id = Number(req.params.id)

       await ServicePedidos.Deletar(id)

res.send({message: "Pedido deletado com sucesso"})      


    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

async Pagamento (req, res) {
    try {
        const id = Number(req.params.id)

        await ServicePedidos.Pagamento(id)

      res.status(200).send({message: "Pagamento feito com sucesso"})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}
}
export default new ControllerPedidos()

