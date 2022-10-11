const {
  create_product_delivery,
} = require('../../controllers/product&delivery/index')

const product_deliveryRouter = ({
  router,
  verifyToken,
  makeExpressCallback,
}) => {
  router.post('/', verifyToken, makeExpressCallback(create_product_delivery))
  return router
}

module.exports = product_deliveryRouter
