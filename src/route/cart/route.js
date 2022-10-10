const {
  create_cart,
  get_customer_cart,
  remove_cart,
  update_cart,
  add_cart,
} = require('../../controllers/cart/index')

const cartRouter = ({ router, makeExpressCallback }) => {
  router.post('/', makeExpressCallback(create_cart))
  router.get('/customer/:id', makeExpressCallback(get_customer_cart))
  router.put('/:id', makeExpressCallback(update_cart))
  router.delete('/:id', makeExpressCallback(remove_cart))
  router.put('/add/:id', makeExpressCallback(add_cart))

  return router
}

module.exports = cartRouter
