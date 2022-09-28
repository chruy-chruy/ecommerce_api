const UC_createOrderDetails = ({ OrderDb, makeOrderDetailsEntity }) => {
    return async function createOrderDetails(data) {
        let rowCount = 0
        let checkArray = 0
        const { order_details, order_id } = data

        // const OrderEntity = makeOrderDetailsEntity({ data });

        for (const orders of order_details) {
            checkArray++
            await makeOrderDetailsEntity({ orders, checkArray, order_id })
            cart_id = orders.cart_id
            const res = await OrderDb.checkCart(cart_id)
            if(!res){ 
            throw new Error("Cart ID : " +cart_id + " is undefined at product array: [" +checkArray +"]");
           }
        }
        for (const orders of order_details) {
            const OrderDetailsEntity = await makeOrderDetailsEntity({ orders, order_id })
            cart_id = orders.cart_id
            res = await OrderDb.createOrderDetails({
                product_name: OrderDetailsEntity.getProductName(),
                barcode: OrderDetailsEntity.getBarcode(),
                quantity: OrderDetailsEntity.getQuantity(),
                price: OrderDetailsEntity.getPrice(),
                status: OrderDetailsEntity.getStatus(),
                order_id: OrderDetailsEntity.getOrder_id(),
                total_price: OrderDetailsEntity.getTotalPrice(),
                cart_id: OrderDetailsEntity.getCartId(),
                product_id: OrderDetailsEntity.getProductId()

            }).then(res => rowCount++)
                .catch(err => {throw new Error("Failed to register product at Database.")});
            
            await OrderDb.updateCart(cart_id)
         
        }
        if (!rowCount) {
            throw new Error("Failed to register product at Database.");
        }
        else {
            return rowCount + " Order details Added succesfully And Cart updated successfully"
        

        }
    }
}

module.exports = UC_createOrderDetails