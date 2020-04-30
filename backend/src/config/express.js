const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const routes = require('../api/routes');
const cors = require('cors');
module.exports = () => {
    const app = express();
    // SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set('port', process.env.PORT || config.get('server.port'));
    // MIDDLEWARES
    app.use(bodyParser.json());

    app.use(cors());

    app.use(routes);

    return app;
};