import express from "express"
import bancoDeDados from "../repository/restaurante.js"

const router = express.Router()
//listar todas
router.get("/todas", (req, res) => {
  const bebidas = bancoDeDados.filter(item => item.tipo === "bebida")
  res.json(bebidas);
})

router.post("/cadastrar", (req, res) => {
  const { id, nome, categoria, preco } = req.body

  const bebida = {
    id,
    tipo: "bebida",
    nome,
    categoria,
    preco,
    status: "Disponível"
  }

  bancoDeDados.push(bebida);

  res.status(201).json({
    mensagem: "Bebida cadastrada com sucesso!",
    bebida
  })
})

router.put("/esgotar/:id", (req, res) => {
  const bebida = bancoDeDados.find(
    item => item.id == req.params.id && item.tipo === "bebida"
  )

  if (!bebida) {
    return res.status(404).json({
      mensagem: "Bebida não encontrada."
    })
  }

  if (bebida.status === "Indisponível") {
    return res.status(400).json({
      mensagem: "Esta bebida já está indisponível."
    })
  }

  bebida.status = "Indisponível";

  res.json({
    mensagem: "Bebida marcada como indisponível!",
    bebida
  })
})

router.put("/repor/:id", (req, res) => {
  const bebida = bancoDeDados.find(
    item => item.id == req.params.id && item.tipo === "bebida"
  )

  if (!bebida) {
    return res.status(404).json({
      mensagem: "Bebida não encontrada."
    })
  }

  bebida.status = "Disponível";

  res.json({
    mensagem: "Estoque reposto com sucesso!",
    bebida
  })
})


router.delete("/deletar/:id", (req, res) => {
  const index = bancoDeDados.findIndex(
    item => item.id == req.params.id && item.tipo === "bebida"
  )

  if (index === -1) {
    return res.status(404).json({
      mensagem: "Bebida não encontrada."
    })
  }

  const [bebidaDeletada] = bancoDeDados.splice(index, 1)

  res.json({
    mensagem: "Bebida deletada com sucesso!",
    bebida: bebidaDeletada
  })
})

export default router