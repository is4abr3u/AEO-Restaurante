import express from "express"

import {listarPedidos, cadastrarPedido,
     alterarPedido, 
      deletarPedido} from "../controllers/pedidosCon.js"
const router = express.Router()

router.get("/pedidos", listarPedidos)

router.post("/pedidos", cadastrarPedido)

router.put("/pedidos/:id", alterarPedido )

router.delete("/pedidos/:id", deletarPedido)

export default router

