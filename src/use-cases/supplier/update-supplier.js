const UC_updateSupplier = ({ supplierDb, updateSupplierEntity }) => {
  return async function updateupplier(data) {
    const SupplierEntity = updateSupplierEntity({ data })

    const res = await supplierDb
      .updateSupplier({
        supplier_name: SupplierEntity.getSupplierName(),
        contact: SupplierEntity.getContact(),
        status: SupplierEntity.getStatus(),
        address: SupplierEntity.getAddress(),
        supplier_id: SupplierEntity.getId(),
      })
      .catch((err) => console.log(err))

    if (res > 0) {
      return { message: 'Supplier Updated succesfully' }
    } else {
      throw new Error('Failed to register user.')
    }
  }
}

module.exports = UC_updateSupplier
