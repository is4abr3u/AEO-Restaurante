import express from 'express'
import bebidas from './router/bebidas.js'
import database from './config/database.js'

const app = express();

app.use(express.json());

app.use('/api/v1/restaurante/bebidas', bebidas )

database.db
.sync({force: false})
.then((_) => {
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
    })
})

.catch((e) => {
    console.log(e)
})

