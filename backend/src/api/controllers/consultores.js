const Consultor = require('../models/consultor');

module.exports = {
    async consultarTodos(requisicao, resposta) {

        await Consultor.find({}, (erros, consultores) => {
            return resposta.json(consultores)  
        });
        
    },

    async consultar(requisicao, resposta) {
        const { id } = requisicao.headers;
        const consultor = await Consultor.findById(id);
        return resposta.json(consultor);
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