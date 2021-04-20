const { Schema } = require('mongoose');

const productSchema = new Schema({
    productId: {
        type: String,
        required: true,
    },
    price: {
        type: Int,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    }    
});

module.exports = productSchema;