import express from 'express'
import bancoDeDados from '../repository/restaurante.js'

const app = express()

// cadastrar 
app.post("/add/v1/pratos/id", (req, res) => {
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

//buscar todos
app.get("/add/v1/pratos/id", (req, res) => {
    res.send({ message: "Pratos encontrados com sucesso!", pratos: bancoDeDados })
})

// buscar 1 
app.get("/add/v1/pratos/id/:id", (req, res) => {
    const id = Number(req.params.id)

    const prato = bancoDeDados.find(p => p.id === id)

    if (!prato) {
        res.status(404).send({ message: "Prato não encontrado!" })
        return
    }

    res.send({ message: "Prato encontrado com sucesso!", prato })
})

//alterar 
app.put("/add/v1/pratos/id/:id", (req, res) => {
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

// deletar 
app.delete("/add/v1/pratos/id/:id", (req, res) => {
    const id = Number(req.params.id)

    const index = bancoDeDados.findIndex(p => p.id === id)

    if (index === -1) {
        res.status(404).send({ message: "Prato não encontrado!" })
        return
    }

    bancoDeDados.splice(index, 1)

    res.send({ message: "Prato removido com sucesso!" })
})

app.listen(3000, () => {
    console.log('Servidor escutando na porta 3000')
})

export default app