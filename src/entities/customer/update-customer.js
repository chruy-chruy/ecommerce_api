const updateCustomerEntity = ({ data }) => {
  const { id } = data
  const {
    password,
    first_name,
    last_name,
    contact,
    address,
  } = data.customer_data
  const status = 'active'
  // console.log(data);

  if (!password) {
    throw new Error('password is required.')
  }
  if (!first_name) {
    throw new Error('first_name is required.')
  }
  if (!last_name) {
    throw new Error('last_name is required.')
  }
  if (!contact) {
    throw new Error('contact is required.')
  }
  if (!address) {
    throw new Error('address is required.')
  }

  return Object.freeze({
    getPassword: () => password,
    getFirstname: () => first_name,
    getLastname: () => last_name,
    getContact: () => contact,
    getAddress: () => address,
    getStatus: () => status,
    getId: () => id,
  })
}
module.exports = updateCustomerEntity
