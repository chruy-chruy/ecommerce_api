const {
  get_product,
  create_product,
  update_product,
} = require('../../controllers/product/index')

const productRouter = ({ router, upload, makeExpressCallback }) => {
  router.get('/', makeExpressCallback(get_product))
  router.post('/', upload, makeExpressCallback(create_product))
  router.patch('/:id', makeExpressCallback(update_product))

  return router
}

module.exports = productRouter
