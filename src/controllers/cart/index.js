const {
  createCart,
  getCustomerCart,
  removeCart,
  updateCart,
} = require('../../use-cases/cart/index')

const CON_createCart = require('./create-cart')
const CON_getCustomerCart = require('./get-customer-cart')
const CON_removeCart = require('./remove-cart')
const CON_updateCart = require('./update-cart')

const create_cart = CON_createCart({ createCart })
const get_customer_cart = CON_getCustomerCart({ getCustomerCart })
const remove_cart = CON_removeCart({ removeCart })
const update_cart = CON_updateCart({ updateCart })

const CON_Cart = Object.freeze({
  create_cart,
  get_customer_cart,
  remove_cart,
  update_cart,
})

module.exports = CON_Cart
module.exports = {
  create_cart,
  get_customer_cart,
  remove_cart,
  update_cart,
}
