const CON_getSingleLog = ({ getSingleLog }) => {
  return async function get(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const id = {
        id: httpRequest.params.id,
      }

      const res = await getSingleLog(id)
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: res,
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

module.exports = CON_getSingleLog
