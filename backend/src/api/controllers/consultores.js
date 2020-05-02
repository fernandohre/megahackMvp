const Consultor = require('../models/consultor');

module.exports = {
    async consultar(requisicao, resposta) {

        await Consultor.find({}, (erros, consultores) => {
            return resposta.json(consultores)  
        });
        
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