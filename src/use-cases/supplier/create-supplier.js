const UC_createSupplier = ({ supplierDb, makeSupplierEntity }) => {
  return async function createSupplier(data) {
    const SupplierEntity = makeSupplierEntity({ data })

    const res = await supplierDb
      .createSupplier({
        supplier_name: SupplierEntity.getSupplierName(),
        contact: SupplierEntity.getContact(),
        status: SupplierEntity.getStatus(),
        address: SupplierEntity.getAddress(),
      })
      .catch((err) => console.log(err))

    if (res) {
      return res
    } else {
      throw new Error('Failed to register user.')
    }
  }
}

module.exports = UC_createSupplier
