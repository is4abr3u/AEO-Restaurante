import express from "express"
import database from "./config/database.js"
import  Routerpedidos from './router/pedidos.js'
const app = express()

app.use(express.json())

app.use('/api/v1/restaurante/pedidos' , Routerpedidos )
//app.use('/api/v1/restaurante/clientes' , Routerclientes )
//app.use('/api/v1/restaurante/mesas' , Routermesas )
//app.use('/api/v1/restaurante/bebidas' , Routerbebidas )
//app.use('/api/v1/restaurante/pratos' , Routerpratos )

//   app.listen(3000, () => {
//             console.log("Servidor rodando na porta 3000")
//         })

database.db
    .sync({ force: true })
    .then((_) => {
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000")
        })
    })

.catch((e) => {
    console.log(e)
})
