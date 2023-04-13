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

const getProductById = async (req, res) => {
    const productId = req.params.id;
    console.log(productId);
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}
module.exports = { createProduct, getProductById }
