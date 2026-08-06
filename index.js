import express from 'express'
import pratos from './router/pratos.js'

const app = express()

app.use(express.json())

app.use('/api/v1/pratos', pratos)

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000")
})
