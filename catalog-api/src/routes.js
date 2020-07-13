const express = require('express')
const routes = express.Router()
const database_sync = require('./config/database-sync')
const productsController = require('./controllers/products')

routes.get('/list-products', productsController.get_products)

routes.get('/list-by-id/:id', productsController.get_by_id)

routes.post('/sync-products', database_sync.getFile)

module.exports = routes