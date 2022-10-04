const UC_createCustomer = ({ customerDb, makeCustomerEntity }) => {
  return async function createCustomer(data) {
    const CustomerEntity = makeCustomerEntity({ data })

    //check if existing username
    const { username } = data
    const isExisting = await customerDb
      .isExisting({ username })
      .catch((err) => console.log(err))
    if (isExisting.rowCount > 0) {
      throw new Error('User already exists')
    }

    const res = await customerDb
      .createCustomer({
        username: CustomerEntity.getUsername(),
        password: CustomerEntity.getPassword(),
        first_name: CustomerEntity.getFirstname(),
        last_name: CustomerEntity.getLastname(),
        contact: CustomerEntity.getContact(),
        address: CustomerEntity.getAddress(),
        status: CustomerEntity.getStatus(),
      })
      .catch((err) => console.log(err))

    if (res) {
      return 'Customer Created Successfully'
    } else {
      throw new Error('Failed to register user.')
    }
  }
}

module.exports = UC_createCustomer
