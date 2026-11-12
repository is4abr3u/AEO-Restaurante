import express from 'express'
import BancoDeDados from '../repository/pedidos.js'
import ControllerPedidos from '../controller/pedidos.js'
const router = express.Router()

router.get("/buscar", ControllerPedidos.Buscar)

router.get("/buscarum/:id", ControllerPedidos.Buscarum )

router.post("/criar", ControllerPedidos.Criar )

router.put("/alterar/:id", ControllerPedidos.Alterar )

router.delete("/deletar/:id", ControllerPedidos.Deletar )

router.post("/pagamento/:id", ControllerPedidos.Pagamento )



export default router