const express = require("express");
const app = express();
const port = 3000;

const router = require("./routers/index");
router(app, express);

const connection = require("./factory/connection");
const tables = require("./factory/tables");
tables.init(connection);

app.listen(port, (error) => {
    if (error) {
        console.log("Deu errado!");
        return;
    }

    console.log("Rodando bem de boa");
})