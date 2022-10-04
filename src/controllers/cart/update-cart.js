const CON_updateCart = ({ updateCart }) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const { source = {}, ...data } = httpRequest.body
      if (httpRequest.headers['Referer']) {
        source.referrer = httpRequest.headers['Referer']
      }
      const { quantity } = data

      const toUpdate = {
        id: httpRequest.params.id,
        quantity,
      }

      const message = await updateCart(toUpdate)
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: message,
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

module.exports = CON_updateCart
