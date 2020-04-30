const express = require('express');

const assessoresConsultores = require('./controllers/consultoresAssessores');
const corretoras = require('./controllers/corretoras');

const routes = express.Router();

routes.get('/assessoresConsultores/consultar', assessoresConsultores.consultar);

routes.get('/corretoras/consultar', corretoras.consultar);

module.exports = routes;