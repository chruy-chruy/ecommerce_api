const {
    createCustomer,
    getCustomer,
    getSingleCustomer,
    updateCustomer
} = require('../../use-cases/customer/index');

const CON_createCustomer = require('./create-customer');
const CON_getCustomer = require('./get-all-customer');
const CON_getSingleCustomer = require('./get-single-customer')
const CON_updateCustomer = require('./update-customer')

const create_customer = CON_createCustomer({ createCustomer })
const get_customer = CON_getCustomer({ getCustomer })
const get_single_customer = CON_getSingleCustomer({ getSingleCustomer })
const update_customer = CON_updateCustomer({ updateCustomer })

const CON_customer = Object.freeze({
    create_customer,
    get_customer,
    get_single_customer,
    update_customer
})

module.exports = CON_customer
module.exports = {
    create_customer,
    get_customer,
    get_single_customer,
    update_customer
}