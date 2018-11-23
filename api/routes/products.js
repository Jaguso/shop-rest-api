const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

//obs: en req.body usamos body-parser
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name, 
        price: req.body.price
    };

    res.status(201).json({
        message: 'Handling POST request to /products',
        createdProduct: product
    });
});

// /:prid quiere decir un id en el url pero puede ser cualquier cosa (no necesariamente llamarse id)
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId; //aquí estamos llamando el id del url
    if(id === 'special') {
        res.status(200).json({
            message: 'You discovered the special id',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an id'
        });
    }
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


