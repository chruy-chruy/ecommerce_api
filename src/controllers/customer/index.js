const {
    createCustomer,
    getCustomer,
    getSingleCustomer
} = require('../../use-cases/customer/index');

const CON_createCustomer = require('./create-customer');
const CON_getCustomer = require('./get-all-customer');
const CON_getSingleCustomer = require('./get-single-customer')


const create_customer = CON_createCustomer({ createCustomer })
const get_customer = CON_getCustomer({ getCustomer })
const get_single_customer = CON_getSingleCustomer({ getSingleCustomer })

const CON_customer = Object.freeze({
    create_customer,
    get_customer,
    get_single_customer
})

module.exports = CON_customer
module.exports = {
    create_customer,
    get_customer,
    get_single_customer
}