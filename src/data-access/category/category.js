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
  const sql = `SELECT * FROM category WHERE status='active'`
  try {
    const result = await db.query(sql)
    return result.rows
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

async function removeCart({ data }) {
  const db = await connect()
  const id = ['deleted', data.id]

  const sql = `UPDATE cart SET status = $1 WHERE cart_id = $2`
  try {
    const result = await db.query(sql, id)
    return result
  } catch (error) {
    console.log('Error: ', error)
  }
}

async function updateCart({ quantity, cart_id, status }) {
  const db = await connect()
  const values = [quantity, cart_id, status]
  const sql = 'UPDATE cart SET quantity = $1 WHERE cart_id = $2 AND status = $3'

  try {
    const result = await db.query(sql, values)
    return result.rowCount
  } catch (error) {
    console.log(error)
  }
}

module.exports = query
