const {
    createLogUser,
    createLogCustomer,
    getLogUser,
    getLogCustomer
} = require('../../use-cases/logs/index');

const CON_createLogUser = require('./create-log-user');
const CON_createLogCustomer = require('./creat-log-customer')
const CON_getAllUser = require('./get-all-user-logs')
const CON_getAllCustomer = require('./get-all-customer-logs')

const create_log_user = CON_createLogUser({ createLogUser })
const create_log_customer = CON_createLogCustomer({ createLogCustomer })
const get_all_user = CON_getAllUser({ getLogUser })
const get_all_customer = CON_getAllCustomer({ getLogCustomer })

const CON_log = Object.freeze({
    create_log_user,
    create_log_customer,
    get_all_user,
    get_all_customer

})

module.exports = CON_log
module.exports = {
    create_log_user,
    create_log_customer,
    get_all_user,
    get_all_customer
}