const UC_createLogCustomer = ({ logDb, makeLogCustomerEntity }) => {
  return async function create(data) {
    const Entity = makeLogCustomerEntity({ data })

    const res = await logDb.createLogCustomer({
      action_made: Entity.getAction(),
      customer_id: Entity.getCustomerId(),
      status: Entity.getStatus(),
    })

    if (res) {
      return {
        message: 'add customer logs succesfully',
      }
    } else {
      throw new Error('Failed to add logs.')
    }
  }
}

module.exports = UC_createLogCustomer
