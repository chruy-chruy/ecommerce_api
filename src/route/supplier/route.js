const {
  get_supplier,
  create_supplier,
  update_supplier,
} = require('../../controllers/supplier/index')

const customerRouter = ({ router, verifyToken, makeExpressCallback }) => {
  router.get('/', verifyToken, makeExpressCallback(get_supplier))
  router.post('/', verifyToken, makeExpressCallback(create_supplier))
  router.put('/:id', verifyToken, makeExpressCallback(update_supplier))

  return router
}

module.exports = customerRouter
