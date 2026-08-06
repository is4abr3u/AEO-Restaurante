import express from 'express'
import bancoDeDados from '../repository/restaurante.js'

const router = express.Router()

router.post("/", (req, res) => {
    const { id, nome, descricao, preco } = req.body

    if (!id || !nome || !preco) {
        res.status(400).send({ message: "Parâmetros inválidos!" })
        return
    }

    const prato = {
        id,
        nome,
        descricao,
        preco
    }

    bancoDeDados.push(prato)

    res.status(201).send({ message: "Prato adicionado com sucesso!", prato })
})


router.get("/", (req, res) => {
    res.send({ message: "Pratos encontrados com sucesso!", pratos: bancoDeDados })
})


router.get("/:id", (req, res) => {
    const id = Number(req.params.id)

    const prato = bancoDeDados.find(p => p.id === id)

    if (!prato) {
        res.status(404).send({ message: "Prato não encontrado!" })
        return
    }

    res.send({ message: "Prato encontrado com sucesso!", prato })
})


router.put("/:id", (req, res) => {
    const id = Number(req.params.id)
    const { nome, descricao, preco } = req.body

    const prato = bancoDeDados.find(p => p.id === id)

    if (!prato) {
        res.status(404).send({ message: "Prato não encontrado!" })
        return
    }

    if (!nome || !preco) {
        res.status(400).send({ message: "Parâmetros inválidos!" })
        return
    }

    prato.nome = nome
    prato.descricao = descricao
    prato.preco = preco

    res.send({ message: "Prato alterado com sucesso!", prato })
})


router.delete("/:id", (req, res) => {
    const id = Number(req.params.id)

    const index = bancoDeDados.findIndex(p => p.id === id)

    if (index === -1) {
        res.status(404).send({ message: "Prato não encontrado!" })
        return
    }

    bancoDeDados.splice(index, 1)

    res.send({ message: "Prato removido com sucesso!" })
})

export default router
