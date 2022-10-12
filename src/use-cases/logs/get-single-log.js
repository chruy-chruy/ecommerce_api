const UC_getSingleLog = ({ logDb }) => {
  return async function SingleCustomer(Id) {
    // console.log(userId)
    const result = await logDb.getSingleLog({ Id })

    if (result) {
      return result.rows
    } else {
      throw new Error('No Customer Found')
    }
  }
}

module.exports = UC_getSingleLog
