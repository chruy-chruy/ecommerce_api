// const { updateUser } = require("../../use-cases/user");

const CON_updateProduct = ({ updateProduct }) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      //get the httprequest body
      const { source = {}, ...product } = httpRequest.body
      if (httpRequest.headers['Referer']) {
        source.referrer = httpRequest.headers['Referer']
      }

      const toUpdate = {
        id: httpRequest.params.id,
        product,
      }

      const message = await updateProduct(toUpdate)
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

module.exports = CON_updateProduct
