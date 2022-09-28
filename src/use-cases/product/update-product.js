const UC_updateProduct = ({ productDb, updateProductEntity }) => {
    return async function patch(data) {
        const entity = await updateProductEntity({ data });

        const res = await productDb.updateProduct({
            product_name: entity.getProductName(),
            barcode: entity.getBarcode(),
            details: entity.getDetails(),
            quantity: entity.getQuantity(),
            price: entity.getPrice(),
            status: entity.getStatus(),
            date_received: entity.getDateReceived(),
            cost: entity.getCost(),
            date_expire: entity.getDateExpire(),
            img: entity.getImg(),
            product_id: entity.getId(),
        })
            .catch(err => console.log(err));

        if (res) {
            return {
                message: "updated succesfully",
            }
        } else {
            throw new Error("Failed to Update User")
        }


    }
}
module.exports = UC_updateProduct