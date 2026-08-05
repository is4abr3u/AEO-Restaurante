import express from "express";
import mesas from "./router/mesas.js";

const app = express();

app.use(express.json()); 

app.use("/mesas", mesas);

app.listen(3000, () => {
    console.log("Servidor Rodando");
});