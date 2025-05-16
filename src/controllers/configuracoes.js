const db = require('../database/connection'); 

module.exports = {
    async listarConfiguracoes(request, response) {
        try {

            const sql = `
                SELECT
                id_config, id_loc_irriga, umid_min, umid_max, temp_max, criado_em 
                FROM configuracoes;
                `;   

            const [rows] = await db.query(sql);            

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de configurações',
                itens: rows.length, 
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarConfiguracoes(request, response) {
        try {

        const { id_loc_irriga, umid_min, umid_max, temp_max, criado_em } = request.body;
        const configuracoes_ativo = 1;

        const sql = `
        INSERT INTO Configuracoes
         (id_loc_irriga, umid_min, umid_max, temp_max, criado_em) 
        VALUES
        (?, ?, ?, ?, NOW());
        `
        
        const values = [id_loc_irriga, umid_min, umid_max, temp_max, criado_em];

        const [result] = await db.query(sql, values);

        const dados = {
            umid_min,
            umid_max
        };
        

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de configurações', 
                dados: dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarConfiguracoes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de configurações', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarConfiguracoes(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de configurações', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  