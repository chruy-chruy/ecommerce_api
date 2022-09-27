const logDb = require('../../data-access/logs/index')
const generateToken = require('../../middleware/jwt/signToken')

const {
    makeLogUserEntity,
    makeLogCustomerEntity
} = require('../../entities/logs/index')


const UC_createLogUser = require('./create-log-user')
const UC_createLogCustomer = require('./create-log-customer')
const UC_getAllUser = require('./get-all-user-logs')
const UC_getAllCustomer = require('./get-all-customer-logs')

const createLogUser = UC_createLogUser({ logDb, makeLogUserEntity })
const createLogCustomer = UC_createLogCustomer({ logDb, makeLogCustomerEntity })
const getLogUser = UC_getAllUser({ logDb })
const getLogCustomer = UC_getAllCustomer({ logDb })

const Service = Object.freeze({
    createLogUser,
    createLogCustomer,
    getLogUser,
    getLogCustomer
})

module.exports = Service
module.exports = {
    createLogUser,
    createLogCustomer,
    getLogUser,
    getLogCustomer
}




