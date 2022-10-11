const {
  create_product_category,
  get_product_category,
} = require('../../controllers/category/index')

const categoryRouter = ({ router, verifyToken, makeExpressCallback }) => {
  router.post('/', verifyToken, makeExpressCallback(create_product_category))
  router.get('/', verifyToken, makeExpressCallback(get_product_category))
  //   router.put('/:id', makeExpressCallback(update_cart))
  //   router.delete('/:id', makeExpressCallback(remove_cart))
  return router
}

module.exports = categoryRouter
