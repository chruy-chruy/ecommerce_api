const connect = require('../../config/db')

const query = () => {
  return Object.freeze({
    createSupplier,
    getSupplier,
    updateSupplier,
  })
}

async function createSupplier({ supplier_name, contact, address, status }) {
  const db = await connect()
  const values = [supplier_name, contact, address, status]
  const sql = `INSERT INTO supplier(supplier_name, contact, address, status)
    VALUES($1,$2,$3,$4)`
  try {
    const result = await db.query(sql, values)
    return result
  } catch (error) {
    console.log(error)
    return error.message
  }
}

async function getSupplier() {
  const db = await connect()
  const sql = `SELECT * FROM supplier WHERE status='active' ORDER BY supplier_id DESC`
  try {
    const result = await db.query(sql)
    return result.rows
  } catch (error) {
    console.log(error)
    return error.message
  }
}

async function updateSupplier({
  supplier_name,
  contact,
  address,
  supplier_id,
  status,
}) {
  const db = await connect()
  const values = [supplier_name, contact, address, supplier_id, status]

  const sql = `UPDATE supplier SET supplier_name = $1, contact = $2, address = $3 WHERE supplier_id =$4 AND status = $5`
  try {
    const result = await db.query(sql, values)
    return result.rowCount
  } catch (error) {
    return error
  }
}

module.exports = query
