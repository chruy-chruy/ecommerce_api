const {
  get_product,
  create_product,
  update_product,
} = require('../../controllers/product/index')

const productRouter = ({ router, verifyToken, makeExpressCallback }) => {
  router.get('/', makeExpressCallback(get_product))
  router.post('/', verifyToken, makeExpressCallback(create_product))
  router.patch('/:id', verifyToken, makeExpressCallback(update_product))

  return router
}

module.exports = productRouter
