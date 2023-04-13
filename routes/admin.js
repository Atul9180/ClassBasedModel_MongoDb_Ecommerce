const express = require('express');
const router = express.Router();
const { createProduct, getProductById } = require('../Controllers/admin')


router.post('/createProduct', createProduct);
router.get('/products/:id', getProductById);

module.exports = router;