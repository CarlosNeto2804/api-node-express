"use strict";

require('./services/LoggerService');
const CONECTION_FACTORY = require('./database/ConnectionFactory');
const CORS              = require('cors')
const EXPRESS           = require('express');
const LOADER            = require('./Loader');
const Server            = require('./Server');
require(`../config.js`)

class App {

    static async init() {

        const app = new Server();
        app.use(CORS())
        try {
            global.logger.info("Obtendo conexão com o banco de dados...");
            await CONECTION_FACTORY.getConnection();
            global.logger.success("Banco conectado com sucesso!");
        } catch (error) {
            global.logger.error(`Erro ao conectar com o banco de dados: ${error.message}`);
            process.exit(1);
        }
        app.use(EXPRESS.json());//substitui o body-parser
        app.use(EXPRESS.static('public'));  
        LOADER.loadAll(app);

        app.listen(global.config.port, () => {
            global.logger.success(`API rodando na porta ${global.config.port}`);
        });

        app.get('/', (req, res) => {
            res.json({
                project: "API-NODE-EXPRESS",
                version: "beta",
                author: "CarlosNeto2804"
            });
        })
    }
}

App.init();