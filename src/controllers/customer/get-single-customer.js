const CON_getSingleCustomer = ({ getSingleCustomer }) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const toView = {
        id: httpRequest.params.id,
      }

      const user = await getSingleCustomer(toView)
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: user,
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

module.exports = CON_getSingleCustomer
