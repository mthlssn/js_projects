const { Router } = require("express");
const router = Router();

const atendimentoController = require("../controllers/atendimentoController");

// get post put delete

router.get("/atendimentos", (req, res) => {
    const listaAtendimentos = atendimentoController.buscar();
    listaAtendimentos.then((atendimentos) => res.status(200).json(atendimentos)).catch((error) => res.status(400).json(error.mensage));
});

router.post("/atendimentos", (req, res) => {
    const novoAtendimento = req.body;
    const atendimento = atendimentoController.criar(novoAtendimento);

    atendimento.then(atendimentoCriado => res.status(201).json(atendimentoCriado)).catch(error => res.status(400).json(error.mensage));
});

router.put("atendimento/:id", (req, res) => {
    const { id } = req.params;
    const resposta = atendimentoController.atualizar(id);
    res.send(resposta);
});

router.delete("atendimento/:id", (req, res) => {
    const { id } = req.params;
    const resposta = atendimentoController.apgar(id);
    res.send(resposta);
});

module.exports = router;