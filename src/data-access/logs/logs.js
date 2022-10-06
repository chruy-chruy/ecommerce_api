const connect = require('../../config/db')

const query = () => {
  return Object.freeze({
    createLogUser,
    createLogCustomer,
    getAllUser,
    getAllCustomer,
  })
}

async function createLogUser({ action_made, user_id, status }) {
  const db = await connect()
  const values = [action_made, user_id, status]
  const sql = `INSERT INTO user_logs (action_made, user_id, status)
    VALUES($1,$2,$3)`
  try {
    const result = await db.query(sql, values)
    return result.rowCount
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

async function createLogCustomer({ action_made, customer_id, status }) {
  const db = await connect()
  const values = [action_made, customer_id, status]
  const sql = `INSERT INTO customer_logs (action_made, customer_id, status)
    VALUES($1,$2,$3)`
  try {
    const result = await db.query(sql, values)
    return result.rowCount
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

async function getAllUser() {
  const db = await connect()
  const sql = `SELECT l.log_id,l.action_made,l.user_id,l.created_at,l.status,u.first_name,u.last_name,u.username,u.role
  FROM user_logs l
  INNER JOIN users u ON l.user_id = u.id
  WHERE l.status = 'active'
  `
  try {
    const result = await db.query(sql)
    return result.rows
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

async function getAllCustomer() {
  const db = await connect()
  const sql = `SELECT * FROM customer_logs WHERE status='active'`
  try {
    const result = await db.query(sql)
    return result.rows
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports = query
