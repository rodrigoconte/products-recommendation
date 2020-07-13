const { request } = require("express")

module.exports = {

    get_products(){
        return res.json({ Hello: 'Product' })
    },

    get_by_id(){
        const {id} = request.params
        return res.json({ Hello: 'Algo' })
    },

}