const UC_getProduct = ({ categoryDb }) => {
  return async function get() {
    const result = await categoryDb.getProduct()
    return result
  }
}

module.exports = UC_getProduct
