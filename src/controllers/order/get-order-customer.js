const CON_getOrderbyCustomer = ({ getOrderbyCustomer }) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const customer_id = httpRequest.params.id
      const order_details = await getOrderbyCustomer(customer_id)

      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: order_details,
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

module.exports = CON_getOrderbyCustomer
