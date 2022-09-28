const UC_loginCustomer= ({ customerDb, loginCustomerEntity, generateToken }) => {
    return async function login(data) {
        const entity = loginCustomerEntity({ data });

    
        const { username } = data; //check if existing username
        const isExisting = await customerDb.isExisting({ username })


        if (isExisting.rowCount == 0) {
            throw new Error("Username Not Exist")
        }

        const res = await customerDb.loginCustomer({
            username: entity.getUsername(),
            password: entity.getPassword(),
        }).catch(err => console.log(err));

        const customer_data = res.rows

        const token = generateToken(customer_data)

        if (res.rowCount == 0) {
            throw new Error("Invalid Password");
        }
        else if (res.rowCount > 0) {
            return { data: customer_data, token: token }
        }
        else {
            throw new Error("Failed to login user.");
        }
    }
}

module.exports = UC_loginCustomer