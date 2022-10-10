const CON_createProductDelivery = ({ createProduct, createDelivery }) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'multipart/form-data',
    }
    try {
      //get the httprequest body
      const { source = {}, ...Info } = httpRequest.body
      source.ip = httpRequest.ip
      source.browser = httpRequest.headers['User-agent']

      //process create delivery first to get delivery_id
      const delivery = await createDelivery(Info.delivery)

      //pass data to createProduct with delivery_id
      const products = Info.products
      const data = {
        delivery_id: delivery.delivery_id,
        products,
      }

      //process create products
      const product = await createProduct(data)

      const result = {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 201,
        body: {
          success: delivery.message + ' and ' + product,
        },
      }
      console.log(result.body)
      return result
    } catch (e) {
      console.log(e)
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      }
    }
  }
}

module.exports = CON_createProductDelivery
