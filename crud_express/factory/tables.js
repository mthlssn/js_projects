class Table {
    init(connection) {
        this.connection = connection;
        this.criarTabelaAtendimentos();
    }

    criarTabelaAtendimentos() {
        const sql = `
            CREATE TABLE IF NOT EXISTS atendimentos ( 
            id INT NOT NULL auto_increment, 
            DATA DATE,
            servico VARCHAR(100),
            cliente VARCHAR(100),
            STATUS ENUM("ativo", "realizado", "cancelado") DEFAULT "ativo",
            PRIMARY KEY (id)
        );
            `;

        this.connection.query(sql, (error) => {
            if (error) {
                console.log("Eita deu erro na hora de criar a tabela atendimentos");
                console.log(error);
                return;
            }
            console.log("Show criou a tabalea atendimentos");
        });
    }
} 

module.exports = new Table();