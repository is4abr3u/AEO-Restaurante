import express from "express";
import bancoDeDados from "../repository/restaurante.js";

const router = express.Router();

// Listar mesas
router.get("/", (req, res) => {
    const mesas = bancoDeDados.filter(item => item.tipo === "mesa");
    res.json(mesas);
});

// Cadastrar mesa
router.post("/", (req, res) => {
    const { numero, capacidade } = req.body;

    const mesa = {
        id: bancoDeDados.length + 1,
        tipo: "mesa",
        numero,
        capacidade,
        status: "Livre"
    };

    bancoDeDados.push(mesa);

    res.status(201).json(mesa);
});

// Alugar/Ocupar mesa
router.put("/alugar/:id", (req, res) => {

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
            mensagem: "Mesa já está ocupada."
        });
    }

    mesa.status = "Ocupada";

    res.json({
        mensagem: "Mesa alugada com sucesso!",
        mesa
    });

});

// Liberar mesa
router.put("/liberar/:id", (req, res) => {

    const mesa = bancoDeDados.find(
        item => item.id == req.params.id && item.tipo === "mesa"
    );

    if (!mesa) {
        return res.status(404).json({
            mensagem: "Mesa não encontrada."
        });
    }

    mesa.status = "Livre";

    res.json({
        mensagem: "Mesa liberada!",
        mesa
    });

});

export default router