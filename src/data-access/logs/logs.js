const connect = require('../../config/db')

const query = () => {
  return Object.freeze({
    createLogUser,
    createLogCustomer,
    getAllUser,
    getAllCustomer,
    getSingleLog,
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
    console.log(error)
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
    console.log(error)
    return error.message
  }
}

async function getAllUser() {
  const db = await connect()
  const sql = `SELECT l.*,u.first_name,u.last_name,u.username,u.role
  FROM user_logs l
  INNER JOIN users u ON l.user_id = u.id
  WHERE l.status = 'active' ORDER BY l.log_id DESC
  `
  try {
    const result = await db.query(sql)
    return result.rows
  } catch (error) {
    console.log(error)
    return error.message
  }
}

async function getAllCustomer() {
  const db = await connect()
  const sql = `SELECT * FROM customer_logs WHERE status='active' `
  try {
    const result = await db.query(sql)
    return result.rows
  } catch (error) {
    console.log(error)
    return error.message
  }
}

async function getSingleLog({ Id }) {
  const db = await connect()
  const id = [Id.id]
  try {
    const sql = `SELECT l.*,u.first_name,u.last_name,u.username,u.role
    FROM user_logs l
    INNER JOIN users u ON l.user_id = u.id
    WHERE l.log_id = $1 AND l.status = 'active' ORDER BY l.log_id DESC`
    const res = await db.query(sql, id)
    return res
  } catch (error) {
    console.log('Error: ', error)
  }
}

module.exports = query
