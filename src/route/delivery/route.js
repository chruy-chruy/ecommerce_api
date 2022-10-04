const {
  create_delivery,
  get_delivery,
} = require('../../controllers/delivery/index')

const deliveryRouter = ({ router, makeExpressCallback }) => {
  router.get('/', makeExpressCallback(get_delivery))
  router.post('/', makeExpressCallback(create_delivery))
  return router
}

module.exports = deliveryRouter
