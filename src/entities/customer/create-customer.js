const makeCustomerEntity = ({ data }) => {
  const { username, password, first_name, last_name, contact, address } = data
  const status = 'active'
  // console.log(data);

  if (!username) {
    throw new Error('username is required.')
  }
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
    getUsername: () => username,
    getPassword: () => password,
    getFirstname: () => first_name,
    getLastname: () => last_name,
    getContact: () => contact,
    getAddress: () => address,
    getStatus: () => status,
  })
}
module.exports = makeCustomerEntity
