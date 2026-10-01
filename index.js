import express from "express"
import database from "./config/database.js"
import bebidas from './router/bebidas.js'
import mesas from './router/mesas.js'
import pedidos from './router/pedidos.js'
import atendente from './router/atendente.js'
import pratos from "./router/pratos.js"


const app = express()

app.use(express.json())

app.use('/api/v1/restaurante/bebidas', bebidas)
app.use('/api/v1/restaurante/mesas', mesas)
app.use('/api/v1/restaurante/atendentes', atendente)
app.use('/api/v1/restaurante/pedidos', pedidos)
app.use('/api/v1/restaurante/pratos' , pratos )


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

