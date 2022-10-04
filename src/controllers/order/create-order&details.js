const CON_createOrder = ({
  createOrder,
  createOrderDetails,
  createCustomer,
  getCustomerCart,
}) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      //get the httprequest body
      const { source = {}, ...Info } = httpRequest.body
      source.ip = httpRequest.ip
      source.browser = httpRequest.headers['User-agent']

      //process create Order first to get Order ID
      const order = await createOrder(Info.order)
      const order_details = {
        order_id: order.order_id,
        order_details: Info.order_details,
      }
      //process create products
      const orderDetails = await createOrderDetails(order_details)

      const result = {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 201,
        body: {
          order: order.message,
          order_details: orderDetails,
        },
      }
      return result
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

module.exports = CON_createOrder
