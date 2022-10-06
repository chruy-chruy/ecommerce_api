const connect = require('../../config/db')

const query = () => {
  return Object.freeze({
    createCustomer,
    getCustomer,
    isExisting,
    getSingleCustomer,
    updateCustomer,
    loginCustomer,
  })
}

async function createCustomer({
  username,
  password,
  first_name,
  last_name,
  contact,
  address,
  status,
}) {
  const db = await connect()
  const values = [
    username,
    password,
    first_name,
    last_name,
    contact,
    address,
    status,
  ]
  const sql = `INSERT INTO customer(username, password, first_name, last_name, contact, address, status )
    VALUES($1,$2,$3,$4,$5,$6,$7)`
  try {
    const result = await db.query(sql, values)
    return result
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

async function getCustomer() {
  const db = await connect()
  const sql = `SELECT * FROM users WHERE role = 'customer' AND status='active'`
  try {
    const result = await db.query(sql)
    return result.rows
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

async function getSingleCustomer({ Id }) {
  const db = await connect()
  const id = [Id.id]
  try {
    const sql = `SELECT * FROM users where id = $1 AND role = 'customer'`
    const res = await db.query(sql, id)
    return res
  } catch (error) {
    console.log('Error: ', error)
  }
}

async function isExisting({ username }) {
  const db = await connect()
  const checkusername = [username]
  try {
    const sql = `SELECT * FROM users where username = $1 AND role = 'customer'`
    return await db.query(sql, checkusername)
  } catch (error) {
    console.log('Error: ', error)
  }
}

async function updateCustomer({ password, first_name, last_name, role, id }) {
  const db = await connect()
  const params = [password, first_name, last_name, role, id]
  const sql = `UPDATE users SET 
                    password = $1,
                    first_name = $2,
                    last_name = $3,
                    role = $4
                WHERE id = $5`
  try {
    const result = await db.query(sql, params)
    return result.rows
  } catch (error) {
    console.log('Error: ', error)
  }
}

async function loginCustomer({ username, password }) {
  const db = await connect()
  const data = [username, password]
  try {
    const sql = `SELECT * FROM customer where username = $1 AND password = $2 AND status = 'active'`
    const result = await db.query(sql, data)
    return result
  } catch (error) {
    console.log('Error: ', error)
  }
}

module.exports = query
