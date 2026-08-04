import express from "express"
import pedidos from "./router/pedidos.js"

const app = express()

app.use(express.json())

app.use(pedidos)

app.listen(3000, () => {
    console.log("Servidor Rodando")
})