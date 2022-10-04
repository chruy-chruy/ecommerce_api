const UC_createDelivery = ({ deliveryDb, makeDeliveryEntity }) => {
  return async function createDelivery(data) {
    const DeliveryEntity = makeDeliveryEntity({ data })

    const res = await deliveryDb
      .createDelivery({
        supplier_name: DeliveryEntity.getSupplierName(),
        date: DeliveryEntity.getDate(),
        status: DeliveryEntity.getStatus(),
      })
      .catch((err) => console.log(err))

    if (res) {
      return {
        message: 'Delivery Transaction Added succesfully',
        delivery_id: res[0].delivery_id,
      }
    } else {
      throw new Error('Failed to register user.')
    }
  }
}

module.exports = UC_createDelivery
