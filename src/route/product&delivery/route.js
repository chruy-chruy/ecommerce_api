const {
  create_product_delivery,
} = require('../../controllers/product&delivery/index')

const product_deliveryRouter = ({ router, makeExpressCallback }) => {
  router.post('/', makeExpressCallback(create_product_delivery))
  return router
}

module.exports = product_deliveryRouter
