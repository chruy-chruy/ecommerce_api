
const CON_removeCart = ({ removeCart }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json",
        }; try {
            //get the httprequest body
            // const { source = {}, ...UserInfo } = httpRequest.body;
            // if (httpRequest.headers["Referer"]) {
            //     source.referrer = httpRequest.headers["Referer"];
            // }

            const toRemove = {
                id: httpRequest.params.id,
            }

            const message = await removeCart(toRemove);
            const result = {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 200,
                body: {
                    message: message

                }
            };
            console.log(result.body)
            return result;
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

module.exports = CON_removeCart