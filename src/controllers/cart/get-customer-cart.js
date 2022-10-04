const CON_getCustomerCart = ({ getCustomerCart }) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const toView = {
        id: httpRequest.params.id,
      }

      const cart = await getCustomerCart(toView)

      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: cart,
      }
    } catch (e) {
      console.log(e.message)
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

module.exports = CON_getCustomerCart
