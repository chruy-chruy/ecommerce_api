const makeProductEntity = require("./create-product");
const updateProductEntity = require('./update-product')

const ProductEntity = Object.freeze({
    makeProductEntity,
    updateProductEntity
})

module.exports = ProductEntity;
module.exports = {
    makeProductEntity,
    updateProductEntity
}
