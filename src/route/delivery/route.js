const {
  create_delivery,
  get_delivery,
  get_delivery_products,
} = require('../../controllers/delivery/index')

const deliveryRouter = ({ router, verifyToken, makeExpressCallback }) => {
  router.get('/', verifyToken, makeExpressCallback(get_delivery))
  router.post('/', verifyToken, makeExpressCallback(create_delivery))
  router.get('/:id', verifyToken, makeExpressCallback(get_delivery_products))
  return router
}

module.exports = deliveryRouter
