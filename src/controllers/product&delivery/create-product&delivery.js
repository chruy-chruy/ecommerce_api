const CON_createProductDelivery = ({ createProduct, createDelivery }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "multipart/form-data",
        };
        try {
            //get the httprequest body
            const product_name = httpRequest.body
           
            // console.log("Product creation: ",json)
            // console.log("File creation: ", httpRequest.file)
            const { source = {}, ...Info } = httpRequest.body;
            source.ip = httpRequest.ip;
            source.browser = httpRequest.headers["User-agent"];
            const delivery_string = Info.delivery
            const delivery_json = JSON.parse(delivery_string)

            const product_string = Info.products
            const product_json = JSON.parse(product_string)
            // console.log(product_json)
            
            
            //process create delivery trans first to get delivery_id
            const delivery = await createDelivery(delivery_json)
            //products type=array
            // const products = Info.products

            //pass data to createProduct with delivery_id
            const data = {
                delivery_id: delivery.delivery_id,
                product_json
            }

            //process create products
            const product = await createProduct(data)

            const result = {
                headers: {
                    "Content-Type": "application/json"
                },
                statusCode: 201,
                body: {
                    message: delivery.message + ' and ' + product

                }

            };
            console.log(result.body);
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

module.exports = CON_createProductDelivery