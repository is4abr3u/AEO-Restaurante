import express from "express"
import ControllerBebidas from "../controller/bebidas.js"

const router = express.Router();

router.get("/buscar", ControllerBebidas.Buscar );

router.post("/cadastrar", ControllerBebidas.Criar );

router.put("/detalhe/:id", ControllerBebidas.Detalhe);

router.put("/alterar/:id", ControllerBebidas.Alterar );

router.delete("/deletar/:id", ControllerBebidas.Deletar );

export default router;