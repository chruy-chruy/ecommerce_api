const connect = require('../../config/db')

const query = () => {
  return Object.freeze({
    createProduct,
    getProduct,
    updateProduct,
  })
}

async function createProduct({
  product_name,
  barcode,
  details,
  quantity,
  price,
  cost,
  status,
  date_received,
  date_expire,
  delivery_id,
  img,
  category,
}) {
  const db = await connect()
  const values = [
    product_name,
    barcode,
    details,
    quantity,
    price,
    cost,
    status,
    date_received,
    date_expire,
    delivery_id,
    img,
    category,
  ]
  const sql = `INSERT INTO product(product_name, barcode, details, quantity, price, cost_per_unit, status, date_received, date_expire,delivery_id, img,category)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`
  try {
    const result = await db.query(sql, values)
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}

async function getProduct() {
  const db = await connect()
  const sql = `SELECT * FROM product WHERE status='active'`
  try {
    const result = await db.query(sql)
    return result.rows
  } catch (error) {
    console.log(error)
    return error
  }
}

async function updateProduct({
  product_name,
  barcode,
  details,
  quantity,
  price,
  status,
  date_received,
  cost,
  date_expire,
  img,
  category,
  product_id,
}) {
  const db = await connect()
  const params = [
    product_name,
    barcode,
    details,
    quantity,
    price,
    status,
    date_received,
    cost,
    date_expire,
    img,
    category,
    product_id,
  ]
  const sql = `UPDATE product SET 
    product_name = $1,
    barcode = $2,
    details = $3,
    quantity = $4,
    price = $5,
    status = $6,
    date_received = $7,
    cost_per_unit = $8,
    date_expire = $9,
    img = $10,
    category = $11
    WHERE product_id = $12`
  try {
    const result = await db.query(sql, params)
    return result.rowCount
  } catch (error) {
    console.log('Error: ', error)
  }
}

module.exports = query
