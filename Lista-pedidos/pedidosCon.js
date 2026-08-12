import bancoDeDados from "../repository/restaurante.js"

export function listarPedidos(req, res) {
   

    res.status(200).send(bancoDeDados)
}

export function cadastrarPedido(req, res) {
    const {id, cliente, entrada, prato, bebida} = req.body

    if (!id || !cliente || !entrada || !prato || !bebida){
        res.status(200).send({messagem: "Favor informar todos os dados"})
        return
    }

    bancoDeDados.push({id, cliente, entrada, prato, bebida})
    res.status(200).send({menssage: "Pedido feito com sucesso"})

}

export function alterarPedido(req, res) {
    const id = req.params.id

    bancoDeDados[id] = req.body
    res.status(200).send({
        message: "Pedido alterado"+bancoDeDados

    })
}

export function deletarPedido(req, res) {
    const id = Number(req.params.id)

    bancoDeDados.splice(id,1)

    res.status(200).send({
        message: "Pedido deletado"

    })
}