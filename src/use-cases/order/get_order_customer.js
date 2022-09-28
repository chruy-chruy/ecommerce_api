const UC_getOrderbyCustomer = ({ OrderDb }) => {
    return async function SingleUser(customer_id) {
        // console.log(userId)
        
        const result = await OrderDb.getOrderbyCustomer( customer_id )
            .catch(err => console(err));

        if (result) {
            return result
        } else {
            throw new Error("No Orders Found")
        }

    }
}

module.exports = UC_getOrderbyCustomer