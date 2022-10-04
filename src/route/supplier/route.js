const {
  get_supplier,
  create_supplier,
  update_supplier,
} = require('../../controllers/supplier/index')

const customerRouter = ({ router, makeExpressCallback }) => {
  router.get('/', makeExpressCallback(get_supplier))
  router.post('/', makeExpressCallback(create_supplier))
  router.put('/:id', makeExpressCallback(update_supplier))

  return router
}

module.exports = customerRouter
