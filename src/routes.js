const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Products Route
routes.get('/products', ProductController.read);
routes.post('/products', ProductController.create);
routes.delete('/products/:id', ProductController.delete);
routes.put('/products/:id', ProductController.update);

module.exports = routes;
