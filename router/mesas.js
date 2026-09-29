import express from "express"
import ControllerMesas from "../controller/mesas.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()

router.post("/criar", ControllerMesas.Criar)
router.get("/buscar", authMiddleware,ControllerMesas.Buscar)
router.get("/detalhe/:id", ControllerMesas.Detalhe)
router.put("/alterar/:id", ControllerMesas.Alterar)
router.delete("/deletar/:id", ControllerMesas.Deletar)

export default router 