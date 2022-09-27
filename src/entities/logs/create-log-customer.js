const makeLogCustomerEntity = ({ data }) => {

    const { action_made, customer_id } = data;
    const status = "active"
    // console.log(data);


    if (!action_made) {
        throw new Error("customer_id is required.");
    }
    if (!customer_id) {
        throw new Error(" customer_id is required.");
    }



    return Object.freeze({
        getAction: () => action_made,
        getCustomerId: () => customer_id,
        getStatus: () => status,
    })

}
module.exports = makeLogCustomerEntity;