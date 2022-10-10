const CON_getDelivery = ({ getDelivery }) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const result = await getDelivery()
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
          error: e,
        },
      }
    }
  }
}

module.exports = CON_getDelivery
