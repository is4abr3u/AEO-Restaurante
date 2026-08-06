import express from "express"
import bancoDeDados from "../repository/restaurante.js"

const router = express.Router()

// Listar todas as mesas
router.get("/todas", (req, res) => {
    const mesas = bancoDeDados.filter(item => item.tipo === "mesa");
    res.json(mesas)
});

// Cadastrar uma mesa
router.post("/cadastrar", (req, res) => {
    const { id, numero, capacidade } = req.body;

    const mesa = {
        id,
        tipo: "mesa",
        numero,
        capacidade,
        status: "Livre"
    };

    bancoDeDados.push(mesa);

    res.status(201).json({
        mensagem: "Mesa cadastrada com sucesso!",
        mesa
    });
});

// Alugar uma mesa
router.put("/reservar/:id", (req, res) => {
    const mesa = bancoDeDados.find(
        item => item.id == req.params.id && item.tipo === "mesa"
    );

    if (!mesa) {
        return res.status(404).json({
            mensagem: "Mesa não encontrada."
        });
    }

    if (mesa.status === "Ocupada") {
        return res.status(400).json({
            mensagem: "Essa mesa já está ocupada."
        });
    }

    mesa.status = "Ocupada"

    res.json({
        mensagem: "Mesa alugada com sucesso!",
        mesa
    });
});

// Liberar uma mesa
router.put("/liberar/:id", (req, res) => {
    const mesa = bancoDeDados.find(
        item => item.id == req.params.id && item.tipo === "mesa"
    );

    if (!mesa) {
        return res.status(404).json({
            mensagem: "Mesa não encontrada."
        });
    }

    mesa.status = "Livre"

    res.json({
        mensagem: "Mesa liberada com sucesso!",
        mesa
    });
});

export default router;