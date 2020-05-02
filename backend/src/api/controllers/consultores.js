const Consultor = require('../models/consultor');

module.exports = {
    async consultar(requisicao, resposta) {
        var consultoresMap = {};

        await Consultor.find({}, (erros, consultores) => {
            consultores.forEach((consultor) => {
                consultoresMap[consultor._id] = consultor;
            }); 
        });

        return resposta.json(consultoresMap)
    },

    async store(requisicao, resposta) {
        const { 
            nome,
            email,
            celular,
            escolaridade,
            profissao,
            biografiaProfissional
        } = requisicao.body;

        const consultor = await Consultor.create({
            nome: nome,
            email: email,
            celular: celular,
            escolaridade: escolaridade,
            profissao: profissao,
            biografiaProfissional: biografiaProfissional
        });

        return resposta.json(consultor);
    }
}