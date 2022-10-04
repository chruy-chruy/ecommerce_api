const makeUserEntity = ({ data }) => {

    const { username, password, first_name, last_name, role, address } = data;
    const status = "active"
    // console.log(data);

    if (!username && !password) {
        throw new Error("Username and Password is required.");
    }
    if (!username) {
        throw new Error("Username is required.");
    }
    if (!password) {
        throw new Error("Password is required.");
    }
    if (password.length < 3) {
        throw new Error("Password must be at least 3 characters.");
    }
    if (!first_name) {
        throw new Error("First Name is required.");
    }
    if (!last_name) {
        throw new Error("Last Name is required.");
    }
    if (!role) {
        throw new Error("User Role is required.");
    }
    if (!address) {
        throw new Error("address is required.");
    }
    

    return Object.freeze({
        getUsername: () => username,
        getPassword: () => password,
        getStatus: () => status,
        getFirstName: () => first_name,
        getLastName: () => last_name,
        getRole: () => role,
        getAddress:() => address
    })

}
module.exports = makeUserEntity;