const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    quantity: { type: Number, default: 1 }
});

//la primer entrada es el nombre del modelo
module.exports = mongoose.model('Order', orderSchema);

