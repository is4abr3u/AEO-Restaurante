import express from "express"
import ControllerPratos from '../controller/pratos.js'
const router = express.Router()

router.get("/buscar", ControllerPratos.Buscar)

router.get("/buscarum/:id", ControllerPratos.BuscarUm)

router.post("/criar", ControllerPratos.Criar )

router.put("/alterar/:id", ControllerPratos.Alterar )

router.delete("/deletar/:id", ControllerPratos.Deletar )

export default router