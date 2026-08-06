import bancoDeDados from "../repository/restaurante.js"

export function listarPedidos(req, res) {
   

    res.status(200).send(bancoDeDados)
}

export function cadastrarPedido(req, res) {
    bancoDeDados.push(req.body)

    res.status(200).send({
        message: "Pedido cadastrado"

    })
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