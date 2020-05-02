const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const routes = require('../api/routes');
const cors = require('cors');
const mongoose = require('mongoose');
module.exports = () => {
    const app = express();
    // SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set('port', process.env.PORT || config.get('server.port'));
    // MIDDLEWARES
    app.use(bodyParser.json());
    //Conexão com banco de dados
    mongoose.connect(config.get('stringConnection'), {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    app.use(cors());

    app.use(routes);

    return app;
};