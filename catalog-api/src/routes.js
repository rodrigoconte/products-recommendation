const express = require('express')
const routes = express.Router()
const productsController = require('./controllers/productsController')

routes.get('/list-products', productsController.get_products)

routes.get('/list-by-id/:id', productsController.get_by_id)

routes.post('/sync-products', productsController.sync_to_database)

module.exports = routes