const CON_getOrderDetailsbyOrder = ({ getOrderDetailsbyOrder }) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const order_id = {
        id: httpRequest.params.id,
      }

      const order_details = await getOrderDetailsbyOrder(order_id)

      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: order_details,
      }
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

module.exports = CON_getOrderDetailsbyOrder
