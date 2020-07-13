const path = require('path')
const fs = require('fs')
const readline = require('readline')

module.exports = {

    getFile(req, res){
        
        var rl = readline.createInterface({
            input : fs.createReadStream(path.resolve(__dirname,'..','database', 'catalog.json')),
            output: process.stdout,
            terminal: false
        })

        rl.on('line',function(line){
            const products = JSON.parse(line) 
            console.log(products)
        })

        return res.json({ status: "Success" })

    }
}