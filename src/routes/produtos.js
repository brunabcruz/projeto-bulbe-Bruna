const express = require('express'); //importa a express
const router = express.Router(); //cria um route e organiza as aplicacoes

const produtosController = require('../controllers/produtosController'); //executa a logica da API

router.get('/', produtosController.listar);

router.get('/:id', produtosController.buscarPorId);

router.post('/', produtosController.criar);

router.put('/:id', produtosController.atualizar);

router.delete('/:id', produtosController.remover);

module.exports = router;
