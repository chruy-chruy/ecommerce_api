const CON_updateSupplier = ({ updateSupplier }) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const { source = {}, ...Info } = httpRequest.body
      source.ip = httpRequest.ip
      source.browser = httpRequest.headers['User-agent']

      const toUpdate = {
        id: httpRequest.params.id,
        Info,
      }
      const result = await updateSupplier(toUpdate)

      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: result,
      }
    } catch (error) {
      console.log(error.message)
      return {
        headers,
        statusCode: 400,
        body: {
          error: error.message,
        },
      }
    }
  }
}

module.exports = CON_updateSupplier
