const supplierDb = require('../../data-access/supplier/index')
const generateToken = require('../../middleware/jwt/signToken')

const {
  makeSupplierEntity,
  updateSupplierEntity,
} = require('../../entities/supplier/index')

const UC_createSupplier = require('./create-supplier')
const UC_getSupplier = require('./get-all-supplier')
const UC_updateSupplier = require('./update-supplier')

const createSupplier = UC_createSupplier({ supplierDb, makeSupplierEntity })
const getSupplier = UC_getSupplier({ supplierDb })
const updateSupplier = UC_updateSupplier({ supplierDb, updateSupplierEntity })

const customerService = Object.freeze({
  getSupplier,
  createSupplier,
  updateSupplier,
})

module.exports = customerService
module.exports = {
  createSupplier,
  getSupplier,
  updateSupplier,
}
