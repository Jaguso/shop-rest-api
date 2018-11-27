const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true},
    price: { type: Number, required: true},
    productImage: { type: String, required: true }
});

//la primer entrada es el nombre del modelo
module.exports = mongoose.model('Product', productSchema)

