const express = require('express');

const getProducts = require('../server/getProducts')

const app = express()

const port = 3001;

const products = require('../products.json')

app.get('/api/products',  getProducts);

app.get('/api/product/:id', getProducts)

app.listen(port, () => { console.log (`Server listening on port : ${port}`)});