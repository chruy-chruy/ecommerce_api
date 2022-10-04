const UC_updateSupplier = ({ supplierDb, updateSupplierEntity }) => {
    return async function updateupplier(data) {
        const SupplierEntity = updateSupplierEntity({ data });
      
        // const { name } = data; //check if existing username
        // const isExisting = await customerDb.isExisting({ username })
        //     .catch(err => console.log(err));

        // if (isExisting.rowCount > 0) {
        //     throw new Error("User already exists")
        // }

        const res = await supplierDb.updateSupplier({
            supplier_name: SupplierEntity.getSupplierName(),
            contact: SupplierEntity.getContact(),
            status: SupplierEntity.getStatus(),
            address: SupplierEntity.getAddress(),
            supplier_id: SupplierEntity.getId()
        })
            .catch(err => console.log(err));

        if (res > 0) {
            return {message: "Supplier Updated succesfully"}
        }
        else {
            throw new Error("Failed to register user.");
        }
    }
}

module.exports = UC_updateSupplier