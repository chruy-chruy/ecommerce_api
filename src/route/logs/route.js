const {
  create_log_user,
  create_log_customer,
  get_all_user,
  get_all_customer,
  get_single_log,
} = require('../../controllers/logs/index')

const logRouter = ({ router, verifyToken, makeExpressCallback }) => {
  // router.get('/customer', makeExpressCallback(get_all_customer))
  router.get('/user', verifyToken, makeExpressCallback(get_all_user))
  router.get('/user/:id', verifyToken, makeExpressCallback(get_single_log))
  router.post('/user/', verifyToken, makeExpressCallback(create_log_user))
  // router.post('/customer/', makeExpressCallback(create_log_customer))
  return router
}

module.exports = logRouter
