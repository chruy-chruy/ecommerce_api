const makeCustomerEntity = require('./create-customer')
const updateCustomerEntity = require('./update-customer')
const loginCustomerEntity = require('./login-customer')

const CustomerEntity = Object.freeze({
  makeCustomerEntity,
  updateCustomerEntity,
  loginCustomerEntity,
})

module.exports = CustomerEntity
module.exports = {
  makeCustomerEntity,
  updateCustomerEntity,
  loginCustomerEntity,
}
