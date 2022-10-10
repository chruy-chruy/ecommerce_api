const {
  createCart,
  getCustomerCart,
  removeCart,
  updateCart,
  addCart,
} = require('../../use-cases/cart/index')

const CON_createCart = require('./create-cart')
const CON_getCustomerCart = require('./get-customer-cart')
const CON_removeCart = require('./remove-cart')
const CON_updateCart = require('./update-cart')
const CON_addCart = require('./add-cart')

const create_cart = CON_createCart({ createCart })
const get_customer_cart = CON_getCustomerCart({ getCustomerCart })
const remove_cart = CON_removeCart({ removeCart })
const update_cart = CON_updateCart({ updateCart })
const add_cart = CON_addCart({ addCart })

const CON_Cart = Object.freeze({
  create_cart,
  get_customer_cart,
  remove_cart,
  update_cart,
  add_cart,
})

module.exports = CON_Cart
module.exports = {
  create_cart,
  get_customer_cart,
  remove_cart,
  update_cart,
  add_cart,
}
