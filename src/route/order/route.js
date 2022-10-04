const {
  create_order_details,
  get_order,
  get_OrderDetailsbyOrder,
  get_order_customer,
} = require('../../controllers/order/index')

const orderRouter = ({ router, makeExpressCallback }) => {
  router.get('/', makeExpressCallback(get_order))
  router.post('/', makeExpressCallback(create_order_details))
  router.get('/details/:id', makeExpressCallback(get_OrderDetailsbyOrder))
  router.get('/:id', makeExpressCallback(get_order_customer))

  return router
}

module.exports = orderRouter
