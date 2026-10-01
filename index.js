import express from 'express'
import atendente from './router/atendente.js'
import database from './config/database.js'

const app = express()
app.use(express.json())

app.use("/api/v1/atendentes", atendente)

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })