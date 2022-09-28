const {
    createProduct,
    getProduct,
    updateProduct
} = require('../../use-cases/product/index');

const CON_createProduct = require('./create-product');
const CON_getProduct = require('./get-all-product');
const CON_updateProduct = require('./update-product')

const create_product = CON_createProduct({ createProduct })
const get_product = CON_getProduct({ getProduct })
const update_product = CON_updateProduct({updateProduct})

const CON_product = Object.freeze({
    create_product,
    get_product,
    update_product
})

module.exports = CON_product
module.exports = {
    create_product,
    get_product,
    update_product
}