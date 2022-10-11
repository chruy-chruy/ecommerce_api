const {
  create_order_details,
  get_order,
  get_OrderDetailsbyOrder,
  get_order_customer,
} = require('../../controllers/order/index')

const orderRouter = ({ router, verifyToken, makeExpressCallback }) => {
  router.get('/', verifyToken, makeExpressCallback(get_order))
  router.post('/', verifyToken, makeExpressCallback(create_order_details))
  router.get(
    '/details/:id',
    verifyToken,
    makeExpressCallback(get_OrderDetailsbyOrder),
  )
  router.get('/:id', verifyToken, makeExpressCallback(get_order_customer))

  return router
}

module.exports = orderRouter
