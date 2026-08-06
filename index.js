import express from 'express'
import bebidasRouter from './router/bebidas.js'

const app = express()

app.use(express.json());

app.use('/bebidas', bebidasRouter);

app.use(express.json())


app.use('/bebidas', bebidasRouter)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
