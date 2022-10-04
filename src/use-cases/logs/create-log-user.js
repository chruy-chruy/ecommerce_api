const UC_createLogUser = ({ logDb, makeLogUserEntity }) => {
  return async function create(data) {
    const Entity = makeLogUserEntity({ data })

    const res = await logDb.createLogUser({
      action_made: Entity.getAction(),
      user_id: Entity.getUserId(),
      status: Entity.getStatus(),
    })

    if (res) {
      return {
        message: 'add user logs succesfully',
      }
    } else {
      throw new Error('Failed to add logs.')
    }
  }
}

module.exports = UC_createLogUser
