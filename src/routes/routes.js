const express = require('express'); 
const router = express.Router(); 

const ConfiguracoesController = require('../controllers/configuracoes'); 

router.get('/configuracoes', ConfiguracoesController.listarConfiguracoes); 
router.post('/configuracoes', ConfiguracoesController.cadastrarConfiguracoes); 
router.patch('/configuracoes/:id', ConfiguracoesController.editarConfiguracoes); 
router.delete('/configuracoes', ConfiguracoesController.apagarConfiguracoes); 


module.exports = router;