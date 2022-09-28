const makeOrderEntity = ({ data }) => {

    const { customer_id,total_price,address,approved_by, shipping_type, order_status,approved_at } = data;
    const status = "active"
    // console.log(data);


    if (!customer_id) {
        throw new Error("customer_name is required.");
    }
    if (!total_price) {
        throw new Error("total_price is required.");
    }
    if (!address) {
        throw new Error("address is required.");
    }
    if (!shipping_type) {
        throw new Error("shiiping_type is required.");
    }



    return Object.freeze({
        getCustomerId: () => customer_id,
        getTotalPrice: () => total_price,
        getAddress: () => address,
        getApprovedBy: () => approved_by,
        getShippingType: () => shipping_type,
        getOrderStatus: () => order_status,
        getStatus: () => status,
    })

}
module.exports = makeOrderEntity;