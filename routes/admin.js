const express = require('express');
const router = express.Router();
const { createProduct, getProductById, getAllProducts, updateProductById, deleteProductById } = require('../Controllers/admin')


router.post('/createProduct', createProduct);
router.get('/products', getAllProducts);

router.route('/products/:id')
    .get(getProductById)
    .put(updateProductById)
    .delete(deleteProductById);


module.exports = router;