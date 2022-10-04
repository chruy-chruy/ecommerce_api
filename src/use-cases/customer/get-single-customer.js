const UC_getSingleCustomer = ({ customerDb }) => {
  return async function SingleCustomer(Id) {
    // console.log(userId)
    const result = await customerDb.getSingleCustomer({ Id })

    if (result) {
      return result.rows[0]
    } else {
      throw new Error('No Customer Found')
    }
  }
}

module.exports = UC_getSingleCustomer
