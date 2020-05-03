const express = require('express');

const consultores = require('./controllers/consultores');

const routes = express.Router();

routes.get('/consultores/consultarTodos', consultores.consultarTodos);
routes.get('/consultores/consultar', consultores.consultar);
routes.post('/consultores/cadastrar', consultores.store);

module.exports = routes;