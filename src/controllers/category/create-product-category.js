const CON_createProduct = ({ createProductCategory }) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const { source = {}, ...data } = httpRequest.body
      source.ip = httpRequest.ip
      source.browser = httpRequest.headers['User-agent']

      const result = await createProductCategory(data)

      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: {
          message: result,
        },
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

module.exports = CON_createProduct
