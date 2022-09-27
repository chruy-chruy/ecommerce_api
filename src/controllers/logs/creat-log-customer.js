const CON_createLog = ({ createLogCustomer }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json",
        };
        try {
            //get the httprequest body
            const { source = {}, ...data } = httpRequest.body;
            source.ip = httpRequest.ip;
            source.browser = httpRequest.headers["User-agent"];

            const res = await createLogCustomer(data)

            const result = {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 200,
                body: res
            };
            return result

        } catch (e) {
            console.log(e.message)
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}

module.exports = CON_createLog