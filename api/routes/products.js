const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/products');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

//obs: en req.body usamos body-parser
router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request to /products',
                createdProduct: product
            });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });

});

// /:prid quiere decir un id en el url pero puede ser cualquier cosa (no necesariamente llamarse id)
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId; //aquí estamos llamando el id del url
    Product.findById(id)
        .exec()
        .then(doc => {
            console.log("From data base", doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({message: 'No valid entry found for provided ID'})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });

});


router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    });
});


router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports = router;


