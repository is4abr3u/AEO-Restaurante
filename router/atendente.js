import express from "express"
import ControllerAtendentes from "../controller/atendente.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()

router.post("/login", ControllerAtendentes.Login)
router.get("/buscar", authMiddleware, ControllerAtendentes.Buscar)
router.get("/detalhe/:id", ControllerAtendentes.Detalhe)
router.post("/criar", ControllerAtendentes.Criar)
router.put("/alterar/:id", authMiddleware, ControllerAtendentes.Alterar)
router.delete("/deletar/:id", ControllerAtendentes.Deletar)

export default router