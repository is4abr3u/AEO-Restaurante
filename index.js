import express from "express"
import database from "./config/database.js"
import mesas from './router/mesas.js'
import  pedidos from './router/pedidos.js'
import atendente from './router/atendente.js'

const app = express()

app.use(express.json())


app.use('/api/v1/restaurante/mesas' , mesas )
app.use("/api/v1/atendentes", atendente)
app.use('/api/v1/restaurante/pedidos' , pedidos )

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