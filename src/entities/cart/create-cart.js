const makeCartEntity = ({ data }) => {

    const { customer_id, product_id, quantity } = data;
    const status = "active"
    // console.log(data);


    if (!customer_id) {
        throw new Error("customer_id is required.");
    }
    if (!product_id) {
        throw new Error("product_id is required.");
    }
    if (!quantity) {
        throw new Error("quantity is required.");
    }


    return Object.freeze({
        getCustomerId: () => customer_id,
        getProductId: () => product_id,
        getQuantity: () => quantity,
        getStatus: () => status,
    })

}
module.exports = makeCartEntity;