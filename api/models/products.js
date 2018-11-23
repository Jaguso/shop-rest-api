const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
});

//la primer entrada es el nombre del modelo
module.exports = mongoose.model('Product', productSchema)

