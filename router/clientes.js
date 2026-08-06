import express from 'express'
import bancoDeDados from '../repository/restaurante.js'

const router = express.Router();
const app = express()

app.use(express.json())


// listar todas 
app.get("/add/pessoa/id/", (req, res) => {
    res.send({ reservas: bancoDeDados })
})

//buscar 1 pelo numero da mesa que é o id 
app.get("/add/pessoa/id/:id", (req, res) => {
    const id = req.params.id
    const reserva = bancoDeDados.find(it => it.id == id)

    if (!reserva) {
        return res.status(404).send({ message: "Reserva não encontrada" })
    }

    res.send({ reserva })
})

// cadastrar cliente
app.post("/add/pessoa/id", (req, res) => {
    const { nome, id, dataReserva } = req.body 
    const status = req.query.status || "ativa"

    if (!nome || !id || !dataReserva) {
        return res.status(400).send({ message: "Favor informar nome, id (número da mesa) e dataReserva" })
    }

    const jaExiste = bancoDeDados.find(it => it.id == id)
    if (jaExiste) {
        return res.status(409).send({ message: "Já existe uma reserva para esta mesa" })
    }

    const novaReserva = { nome, id, dataReserva, status }
    bancoDeDados.push(novaReserva)

    res.status(201).send({ message: "Reserva cadastrada com sucesso", reserva: novaReserva })
})

// alterar cadastro 
app.put("/add/pessoa/id/:id", (req, res) => {
    const id = req.params.id
    const { nome, dataReserva, status } = req.body

    const reserva = bancoDeDados.find(it => it.id == id)
    if (!reserva) {
        return res.status(404).send({ message: "Reserva não encontrada" })
    }

    if (nome) reserva.nome = nome
    if (dataReserva) reserva.dataReserva = dataReserva
    if (status) reserva.status = status

    res.send({ message: "Reserva atualizada com sucesso", reserva })
})

// deletar cadastro
app.delete("/add/pessoa/id/:id", (req, res) => {
    const id = req.params.id
    const index = bancoDeDados.find(it => it.id == id)

    if (index === -1) {
        return res.status(404).send({ message: "Reserva não encontrada" })
    }

    bancoDeDados.splice(index, 1)
    res.send({ message: "Reserva removida com sucesso" })
})

app.listen(3000, () => {
    console.log('Servidor escutando na porta 3000')
})

export default router 