import express from "express"
import database from "./config/database.js"

const app = express()

app.use(express.json())

//app.use('/api/v1/restaurante/pedidos' , Routerpedidos )
//app.use('/api/v1/restaurante/clientes' , Routerclientes )
//app.use('/api/v1/restaurante/mesas' , Routermesas )
//app.use('/api/v1/restaurante/bebidas' , Routerbebidas )
//app.use('/api/v1/restaurante/pratos' , Routerpratos )

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
