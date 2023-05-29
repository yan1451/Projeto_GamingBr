const express = require('express');
const { criarRestaurantes, obterRestaurante } = require('../controllers/restaurantes');

const router = express.Router();

router.post('/', criarRestaurantes);
router.post('/verificar', obterRestaurante);

module.exports = router;
