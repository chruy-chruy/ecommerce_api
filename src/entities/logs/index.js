const makeLogUserEntity = require('./create-log-user')
const makeLogCustomerEntity = require('./create-log-customer')

const LogEntity = Object.freeze({
  makeLogUserEntity,
  makeLogCustomerEntity,
})

module.exports = LogEntity
module.exports = {
  makeLogUserEntity,
  makeLogCustomerEntity,
}
