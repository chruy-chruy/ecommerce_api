const updateSupplierEntity = ({ data }) => {
  const { supplier_name, contact, address } = data.Info
  const { id } = data
  const status = 'active'
  // console.log(data);

  if (!supplier_name) {
    throw new Error('supplier_name is required.')
  }
  if (!contact) {
    throw new Error('contact is required.')
  }
  if (!address) {
    throw new Error('address is required.')
  }
  if (!id) {
    throw new Error('id is required.')
  }

  return Object.freeze({
    getSupplierName: () => supplier_name,
    getContact: () => contact,
    getAddress: () => address,
    getStatus: () => status,
    getId: () => id,
  })
}
module.exports = updateSupplierEntity
