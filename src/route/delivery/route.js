const {
  create_delivery,
  get_delivery,
  get_delivery_products,
} = require('../../controllers/delivery/index')

const deliveryRouter = ({ router, makeExpressCallback }) => {
  router.get('/', makeExpressCallback(get_delivery))
  router.post('/', makeExpressCallback(create_delivery))
  router.get('/:id', makeExpressCallback(get_delivery_products))
  return router
}

module.exports = deliveryRouter
