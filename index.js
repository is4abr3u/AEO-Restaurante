import express from "express"
import mesas from "./router/mesas.js"
import pratos from "./router/pratos.js"
import pedidos from "./router/pedidos.js"

const app = express()

app.use(express.json())

app.use('/add/v1/pratos/', pratos)
app.use('/add/v1/pedidos/', pedidos)
app.use('/add/v1/mesas', mesas)

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000")
})
