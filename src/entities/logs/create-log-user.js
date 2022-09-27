const makeLogUserEntity = ({ data }) => {

    const { action_made, user_id } = data;
    const status = "active"
    // console.log(data);


    if (!action_made) {
        throw new Error("customer_id is required.");
    }
    if (!user_id) {
        throw new Error(" user_id is required.");
    }



    return Object.freeze({
        getAction: () => action_made,
        getUserId: () => user_id,
        getStatus: () => status,
    })

}
module.exports = makeLogUserEntity;