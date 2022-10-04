const makeSupplierEntity = require("./create-supplier");
const updateSupplierEntity = require("./update-supplier")

const SupplierEntity = Object.freeze({
    makeSupplierEntity,
    updateSupplierEntity
})

module.exports = SupplierEntity;
module.exports = {
    makeSupplierEntity,
    updateSupplierEntity
}
