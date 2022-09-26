const UC_removeCart = ({ cartDb }) => {
    return async function remove(data) {

        const res = await cartDb.removeCart({ data })
            .catch(err => console.log(err));

        if (res) {
            return "Cart deleted"
        } else {
            throw new Error("Failed to delete cart")
        }
    }


}

module.exports = UC_removeCart