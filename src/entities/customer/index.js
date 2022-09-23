const makeCustomerEntity = require("./create-customer");
const updateCustomerEntity = require("./update-customer")

const CustomerEntity = Object.freeze({
    makeCustomerEntity,
    updateCustomerEntity,
})

module.exports = CustomerEntity;
module.exports = {
    makeCustomerEntity,
    updateCustomerEntity
}
