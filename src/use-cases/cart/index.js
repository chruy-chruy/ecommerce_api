const cartDb = require('../../data-access/cart/index')
const generateToken = require('../../middleware/jwt/signToken')

const {
  makeCartEntity,
  updateCartEntity,
} = require('../../entities/cart/index')

const UC_updateCart = require('./update-cart')
const UC_createCart = require('./create-cart')
const UC_getCustomerCart = require('./get-customer-cart')
const UC_removeCart = require('./remove-cart')

const createCart = UC_createCart({ cartDb, makeCartEntity })
const getCustomerCart = UC_getCustomerCart({ cartDb })
const removeCart = UC_removeCart({ cartDb })
const updateCart = UC_updateCart({ cartDb, updateCartEntity })

const CartService = Object.freeze({
  createCart,
  getCustomerCart,
  removeCart,
  updateCart,
})

module.exports = CartService
module.exports = {
  createCart,
  getCustomerCart,
  removeCart,
  updateCart,
}
