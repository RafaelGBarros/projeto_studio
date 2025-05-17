const express = require('express');
const router = express.Router();
const professoresController = require('../controllers/professores.controller');

// Rotas para professores
router.get('/', professoresController.listarTodos);
router.get('/:id', professoresController.buscarPorId);
router.post('/', professoresController.criar);
router.put('/:id', professoresController.atualizar);
router.delete('/:id', professoresController.deletar);

module.exports = router; 