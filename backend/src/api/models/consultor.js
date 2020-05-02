const {Schema, model} = require('mongoose');

const ConsultorSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    },
    escolaridade: {
        codigo: Number,
        descricao: String
    },
    profissao: {
        codigo: Number,
        descricao: String
    },
    biografiaProfissional: {
        type: String,
        required: true
    }
});

module.exports = model('Consultor', ConsultorSchema, 'consultores');