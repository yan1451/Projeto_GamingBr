const express = require('express');
const { criarRestaurantes } = require('../controllers/restaurantes');

const router = express.Router();

router.post('/', criarRestaurantes);

module.exports = router;
