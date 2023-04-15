const Cart = require('../Model/cart');
const Product = require('../Model/products');
const User = require('../Model/users');


const getUserCartProducts = async (userId) => {
    try {
        const cart = await Cart.findOne({ user: userId }).populate('items.product');
        return cart.items;
    }
    catch (err) {
        return resizeBy.status(500).send(`error in fetch ...${err}`)
    }
}

const items = await getUserCartProducts('user_id');
console.log(items);