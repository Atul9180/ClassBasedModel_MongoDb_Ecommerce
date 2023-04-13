const express = require('express');
const router = express.Router();
const { createProduct } = require('../Controllers/admin')


router.post('/createProduct', createProduct);

module.exports = router;