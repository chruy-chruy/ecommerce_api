const CON_getAllCustomer = ({ getLogCustomer }) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const result = await getLogCustomer()

      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: result,
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

module.exports = CON_getAllCustomer
