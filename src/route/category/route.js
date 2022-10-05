const {
  create_product_category,
  get_product_category,
} = require('../../controllers/category/index')

const categoryRouter = ({ router, makeExpressCallback }) => {
  router.post('/', makeExpressCallback(create_product_category))
  router.get('/', makeExpressCallback(get_product_category))
  //   router.put('/:id', makeExpressCallback(update_cart))
  //   router.delete('/:id', makeExpressCallback(remove_cart))
  return router
}

module.exports = categoryRouter
