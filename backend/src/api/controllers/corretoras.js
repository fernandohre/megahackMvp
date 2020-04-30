module.exports = {
    async consultar(requisicao, resposta) {
        const dados = {
            nome: 'rico investimentos',
            contato: 'comercial@rico.com.br'
        };
        return resposta.json(dados);
    }
}