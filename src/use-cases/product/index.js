const productDb = require('../../data-access/product/index')
const generateToken = require('../../middleware/jwt/signToken')

const {
    makeProductEntity,
    updateProductEntity
} = require('../../entities/product/index')



const UC_createProduct = require('./create-product')
const UC_getProduct = require('./get-all-product')
const UC_updateProduct = require('./update-product')

const createProduct = UC_createProduct({ productDb, makeProductEntity })
const getProduct = UC_getProduct({ productDb })
const updateProduct = UC_updateProduct({ productDb, updateProductEntity })

const productService = Object.freeze({
    createProduct,
    getProduct,
    updateProduct
})

module.exports = productService
module.exports = {
    createProduct,
    getProduct,
    updateProduct

}




