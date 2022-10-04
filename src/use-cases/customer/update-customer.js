const UC_updateCustomer = ({ customerDb, updateCustomerEntity }) => {
  return async function patch(data) {
    const CustomerEntity = await updateCustomerEntity({ data })

    const res = await customerDb
      .updateCustomer({
        customer_id: CustomerEntity.getId(),
        password: CustomerEntity.getPassword(),
        first_name: CustomerEntity.getFirstname(),
        last_name: CustomerEntity.getLastname(),
        contact: CustomerEntity.getContact(),
        address: CustomerEntity.getAddress(),
      })
      .catch((err) => console.log(err))

    if (res) {
      return {
        message: 'updated succesfully',
      }
    } else {
      throw new Error('Failed to Update User')
    }
  }
}
module.exports = UC_updateCustomer
