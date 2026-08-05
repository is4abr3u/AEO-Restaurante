import express from "express"
import clientes from './router/clientes.js'

const app = express()
app.use(express.json)
app.use(clientes)

app.listen(3000, () => {
    console.log("Servidor Rodando")
})