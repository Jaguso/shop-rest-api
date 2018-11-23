const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false})); //para parsear otras cosas (si ponemos true, se extiende a cosas que no necesitamos ahora)
app.use(bodyParser.json()); //es para parsear json

//esto tiene que ir antes que las rutas
//la segunda entrada de res.header dice a quien le damos acceso al api
//obs req.method nos dice si es post, get, etc
//obs estas restricciones solo sirven para pags web y no para postman
app.use((req, res, next) => {
    res.header('Access-Controll-Allow-Origin', '*');
    res.header(
        'Access-Controll-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({})
    }
    next();
});


app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app;