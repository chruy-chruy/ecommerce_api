const {
    getSupplier,
    createSupplier,
    updateSupplier
} = require('../../use-cases/supplier/index');

const CON_createSupplier = require('./create-supplier');
const CON_getSupplier = require('./get-all-supplier');
const CON_updateSupplier = require('./update-supplier')

const create_supplier = CON_createSupplier({ createSupplier })
const get_supplier = CON_getSupplier({ getSupplier })
const update_supplier = CON_updateSupplier({updateSupplier})

const CON_customer = Object.freeze({
    create_supplier,
    get_supplier,
    update_supplier
})

module.exports = CON_customer
module.exports = {
    create_supplier,
    get_supplier,
    update_supplier
}