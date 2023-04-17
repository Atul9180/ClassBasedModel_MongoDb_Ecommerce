const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

// /admin/add-product 
router.route('/add-product')
    .get(adminController.getAddProduct)
    .post(adminController.postAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

router.get('/edit-product/:productId', adminController.editProduct);

router.post('/edit-product', adminController.saveEditedProduct);

router.post('/delete-product', adminController.deleteProduct);

module.exports = router;
