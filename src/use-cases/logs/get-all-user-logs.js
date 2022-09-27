const UC_getAllUser = ({ logDb }) => {
    return async function get() {
        const result = await logDb.getAllUser()
        return result
    }
}

module.exports = UC_getAllUser