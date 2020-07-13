const Product = require('../models/Product')
const path = require('path')
const fs = require('fs')
const readline = require('readline')

module.exports = {

    get_products(req, res){
        return res.json({ Hello: 'Product' })
    },

    get_by_id(req, res){
        const {id} = request.params
        return res.json({ Hello: 'Algo' })
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