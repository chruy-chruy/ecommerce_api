const {
  fetchUsers,
  create,
  fetchSingleUser,
  updateUserController,
  deleteUserController,
  login,
} = require('../../controllers/user/index')

const userRouter = ({ router, verifyToken, makeExpressCallback }) => {
  router.get('/', makeExpressCallback(fetchUsers))
  router.post('/', makeExpressCallback(create))
  router.get('/:id', makeExpressCallback(fetchSingleUser))
  router.patch('/:id', makeExpressCallback(updateUserController))
  router.delete('/delete/:id', makeExpressCallback(deleteUserController))
  router.post('/login', makeExpressCallback(login))

  return router
}

module.exports = userRouter
