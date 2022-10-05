const {
  createProductCategory,
  getProductCategory,
} = require('../../use-cases/category/index')

const CON_createProduct = require('./create-product-category')
const CON_getProduct = require('./get-product-category')

const create_product_category = CON_createProduct({ createProductCategory })
const get_product_category = CON_getProduct({ getProductCategory })
const CON_Cat = Object.freeze({
  create_product_category,
  get_product_category,
})

module.exports = CON_Cat
module.exports = {
  create_product_category,
  get_product_category,
}
