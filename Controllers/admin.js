const Product = require('../Model/products')

const createProduct = async (req, res) => {
    const { name, price, description, image } = req.body;
    try {
        const product = new Product({ name, price, description, image });
        await product.save();

        res.send('Product created successfully!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

module.exports = { createProduct }
