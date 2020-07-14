const Product = require('../models/Product')
const path = require('path')
const fs = require('fs')
const readline = require('readline')

module.exports = {

    async get_products(req, res){
        const products = await Product.findAll()
        return res.json(products)
    },

    async get_by_id(req, res){
        const {id} = request.params
        const product = await Product.findByPk(id);
        return res.json(product)
    },

    async sync_to_database(req, res){

        var rl = readline.createInterface({
            input : fs.createReadStream(path.resolve(__dirname,'..','database', 'catalog.json')),
            output: process.stdout,
            terminal: false
        })

        await rl.on('line', async (line) => {
            const json = JSON.parse(line) 
            var product = await Product.create({json})
        })

        return res.json( { status: 'ok' } )
    }

}