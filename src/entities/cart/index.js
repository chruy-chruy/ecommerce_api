const makeCartEntity = require('./create-cart')
const updateCartEntity = require('./update-cart')

const CartEntity = Object.freeze({
  makeCartEntity,
  updateCartEntity,
})

module.exports = CartEntity
module.exports = {
  makeCartEntity,
  updateCartEntity,
}
