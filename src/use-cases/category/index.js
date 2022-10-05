const categoryDb = require('../../data-access/category/index')

const {
  makeCartmakeProductCategoryEntityEntity,
} = require('../../entities/category')

const UC_createProductCategory = require('./create-product-category')
const UC_getProduct = require('./get-product-category')

const createProductCategory = UC_createProductCategory({
  categoryDb,
  makeCartmakeProductCategoryEntityEntity,
})
const getProductCategory = UC_getProduct({ categoryDb })

const service = Object.freeze({
  createProductCategory,
  getProductCategory,
})

module.exports = service
module.exports = {
  createProductCategory,
  getProductCategory,
}
