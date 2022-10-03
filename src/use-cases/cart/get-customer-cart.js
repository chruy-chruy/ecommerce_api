const UC_getCustomerCart = ({ cartDb }) => {
    return async function get(Id) {
        // console.log(userId)
        const result = await cartDb.getCustomerCart({ Id })
        if (result) {
            return result
        } else {
            throw new Error("No Customer Found")
        }

    }
}

module.exports = UC_getCustomerCart