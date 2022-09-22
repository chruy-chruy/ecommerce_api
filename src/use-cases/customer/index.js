const customerDb = require('../../data-access/customer/index')
const generateToken = require('../../middleware/jwt/signToken')

const {
    makeCustomerEntity,
} = require('../../entities/customer/index')



const UC_createCustomer = require('./create-customer')
const UC_getCustomer = require('./get-all-customer')
const UC_getSingleCustomer = require('./get-single-customer')

const createCustomer = UC_createCustomer({ customerDb, makeCustomerEntity })
const getCustomer = UC_getCustomer({ customerDb })
const getSingleCustomer = UC_getSingleCustomer({ customerDb })

const customerService = Object.freeze({
    createCustomer,
    getCustomer,
    getSingleCustomer
})

module.exports = customerService
module.exports = {
    createCustomer,
    getCustomer,
    getSingleCustomer
}




