const { Model, DataTypes } = require('sequelize')

class Product extends Model {
    static init(sequelize){
        super.init({
            json: DataTypes.JSON,
        }, {
            sequelize
        })
    }
}

module.exports = Product