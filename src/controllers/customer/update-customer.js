const CON_updateCustomer = ({ updateCustomer }) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const { source = {}, ...customer_data } = httpRequest.body
      if (httpRequest.headers['Referer']) {
        source.referrer = httpRequest.headers['Referer']
      }

      const toUpdate = {
        id: httpRequest.params.id,
        customer_data,
      }

      const message = await updateCustomer(toUpdate)
      console.log(message)
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: message,
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

module.exports = CON_updateCustomer
