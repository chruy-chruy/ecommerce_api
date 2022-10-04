const UC_createProduct = ({ productDb, makeProductEntity }) => {
    return async function createProduct(data) {
        const { products, delivery_id } = data
    
        let rowCount = 0
        let checkArray = 0

        //check all the enities per product array
        for (const product of products) {
            checkArray++
            ProductEntity = await makeProductEntity({ product, checkArray, delivery_id })
        }

        //insert into database per product array
        for (const product of products) {
            ProductEntity = await makeProductEntity({ product, delivery_id })

            await productDb.createProduct({
                product_name: ProductEntity.getProductName(),
                barcode: ProductEntity.getBarcode(),
                details: ProductEntity.getDetails(),
                quantity: ProductEntity.getQuantity(),
                price: ProductEntity.getPrice(),
                cost: ProductEntity.getCost(),
                status: ProductEntity.getStatus(),
                date_received: ProductEntity.getDateReceived(),
                date_expire: ProductEntity.getDateExpire(),
                delivery_id: ProductEntity.getDeliveryId(),
                img: ProductEntity.getImg()
            }).then(res => rowCount++)
                .catch(err => console.log(err));

        }
        
        if (rowCount == 0) {
            throw new Error("Failed to register product at Database.");
        }

        return rowCount + " products added Succesfully"
        

    }
}

module.exports = UC_createProduct
