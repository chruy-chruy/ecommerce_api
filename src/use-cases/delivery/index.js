const deliveryDb = require('../../data-access/delivery/index')
const generateToken = require('../../middleware/jwt/signToken')

const { makeDeliveryEntity } = require('../../entities/delivery/index')

const UC_createDelivery = require('./create-delivery')
const UC_getDelivery = require('./get-all-delivery')
const UC_getDeliveryProducts = require('./get-delivery-products')

const createDelivery = UC_createDelivery({ deliveryDb, makeDeliveryEntity })
const getDelivery = UC_getDelivery({ deliveryDb })
const getDeliveryProducts = UC_getDeliveryProducts({ deliveryDb })

const Service = Object.freeze({
  createDelivery,
  getDelivery,
  getDeliveryProducts,
})

module.exports = Service
module.exports = {
  createDelivery,
  getDelivery,
  getDeliveryProducts,
}
