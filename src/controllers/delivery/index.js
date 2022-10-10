const {
  createDelivery,
  getDelivery,
  getDeliveryProducts,
} = require('../../use-cases/delivery/index')

const CON_createDelivery = require('./create-delivery')
const CON_getDelivery = require('./get-all-delivery')
const CON_getDelvieryProducts = require('./get-delivery-products')

const create_delivery = CON_createDelivery({ createDelivery })
const get_delivery = CON_getDelivery({ getDelivery })
const get_delivery_products = CON_getDelvieryProducts({ getDeliveryProducts })

const CON_delivery = Object.freeze({
  create_delivery,
  get_delivery,
  get_delivery_products,
})

module.exports = CON_delivery
module.exports = {
  create_delivery,
  get_delivery,
  get_delivery_products,
}
