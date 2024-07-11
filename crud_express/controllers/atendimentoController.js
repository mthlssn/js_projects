const AtendimentoModel = require("../models/atendimentoModel");

class AtendimentoController {
    buscar() {
        return AtendimentoModel.listar();
    }

    criar(novoAtendimento) {

        return AtendimentoModel.criar(novoAtendimento);
    }

    atualizar(id) {
        return "Atualizando atendimento número " + id + "...";
    }

    apgar(id) {
        return "Apagando atendimento número " + id + "...";
    }
}

module.exports = new AtendimentoController();