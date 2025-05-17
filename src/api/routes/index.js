const express = require('express');
const router = express.Router();

// Importar rotas específicas
const professoresRoutes = require('./professores.routes');
const modalidadesRoutes = require('./modalidades.routes');
const noticiasRoutes = require('./noticias.routes');

// Definir rotas
router.use('/professores', professoresRoutes);
router.use('/modalidades', modalidadesRoutes);
router.use('/noticias', noticiasRoutes);

module.exports = router; 