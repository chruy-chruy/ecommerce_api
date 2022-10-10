const UC_getDeliveryProducts = ({ deliveryDb }) => {
  return async function SingleCustomer(Id) {
    // console.log(userId)
    const result = await deliveryDb.getDeliveryProducts({ Id })

    if (result.rowCount) {
      return result.rows
    } else {
      throw new Error('No Delivery Transaction Found')
    }
  }
}

module.exports = UC_getDeliveryProducts
