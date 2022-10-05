const CON_createCart = ({ createCart }) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const { source = {}, ...data } = httpRequest.body
      source.ip = httpRequest.ip
      source.browser = httpRequest.headers['User-agent']

      const result = await createCart(data)

      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: result.statusCode,
        body: {
          error: result.message,
          cart_id: result.cart_id,
        },
      }
    } catch (error) {
      console.log(error)
      return {
        headers,
        statusCode: 400,
        body: {
          error: error.message,
        },
      }
    }
  }
}

module.exports = CON_createCart
