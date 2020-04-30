module.exports = {
    async consultar(requisicao, resposta) {
        const dados = {
            usuario: 'teste@investimentos.com.br',
            apelido: '@consultorFinanceiro'
        };
        return resposta.json(dados)
    }
}