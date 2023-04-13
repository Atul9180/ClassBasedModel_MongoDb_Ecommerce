const express = require('express');
const router = express.Router();
const { createProduct, createUser, findUserById, getProductById, getAllProducts, updateProductById, deleteProductById } = require('../Controllers/admin')


router.post('/createProduct', createProduct);
router.get('/products', getAllProducts);
router.route('/products/:id')
    .get(getProductById)
    .put(updateProductById)
    .delete(deleteProductById);

router.post('/createUser', createUser);
router.route('/users/:id')
    .get(findUserById);


module.exports = router;