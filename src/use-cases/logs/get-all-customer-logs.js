const UC_getAllCustomer = ({ logDb }) => {
  return async function get() {
    const result = await logDb.getAllCustomer()
    return result
  }
}

module.exports = UC_getAllCustomer
