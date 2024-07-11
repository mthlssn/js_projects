const connection = require("../factory/connection");

class AtendimentoModel {
    listar() {
        const sql = "SELECT * FROM atendimentos;";

        return new Promise((resolve, reject) => {
            connection.query(sql, {}, (error, resposta) => {
                if (error) {
                    console.log("Deu erro no listar...");
                    reject(error);
                }
    
                console.log("Nice");
                resolve(resposta);
            })
        });
    }

    criar(novoAtendimento) {
        const sql = "INSERT INTO atendimentos SET ?";

        return new Promise((resolve, reject) => {
            connection.query(sql, novoAtendimento, (error, resposta) => {
                if(error) {
                    console.log("Deu errado no criar... " + error + novoAtendimento);
                    reject(error);
                }
    
                console.log("abelha " + resposta);
                resolve(resposta);
            });
        });
    }
}

module.exports = new AtendimentoModel();