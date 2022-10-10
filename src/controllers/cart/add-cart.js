const CON_addCart = ({ addCart }) => {
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

      const toAdd = {
        id: httpRequest.params.id,
        quantity,
      }

      const message = await addCart(toAdd)
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

module.exports = CON_addCart
