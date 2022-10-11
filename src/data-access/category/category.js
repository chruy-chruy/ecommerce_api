const connect = require('../../config/db')

const query = () => {
  return Object.freeze({
    createProduct,
    getProduct,
  })
}

async function createProduct({ name, status }) {
  const db = await connect()
  const values = [name, status]
  const sql = `INSERT INTO category( name, status) VALUES($1,$2) `
  try {
    const result = await db.query(sql, values)
    return result
  } catch (error) {
    console.log(error.message)
  }
}

async function getProduct() {
  const db = await connect()
  const sql = `SELECT * FROM category WHERE status='active' ORDER BY category_id DESC`
  try {
    const result = await db.query(sql)
    return result.rows
  } catch (error) {
    console.log(error)
    return error.message
  }
}

module.exports = query
