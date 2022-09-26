const UC_createCart = ({ cartDb, makeCartEntity }) => {
    return async function createCart(data) {
        const CartEntity = makeCartEntity({ data });


        const res = await cartDb.createCart({
            customer_id: CartEntity.getCustomerId(),
            product_id: CartEntity.getProductId(),
            quantity: CartEntity.getQuantity(),
            status: CartEntity.getStatus()
        })


        if (res) {
            return "Added product to Cart"
        }
        else {
            throw new Error("Failed to add product to database table cart.");
        }
    }
}

module.exports = UC_createCart