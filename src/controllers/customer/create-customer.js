const CON_createCustomer = ({ createCustomer }) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      //get the httprequest body
      const { source = {}, ...CustomerInfo } = httpRequest.body
      source.ip = httpRequest.ip
      source.browser = httpRequest.headers['User-agent']

      const message = await createCustomer(CustomerInfo)

      const result = {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: {
          message: message,
        },
      }
      console.log(result.body)
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

module.exports = CON_createCustomer
