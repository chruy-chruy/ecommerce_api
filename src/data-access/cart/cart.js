const connect = require('../../config/db')

const query = () => {
  return Object.freeze({
    createCart,
    getCustomerCart,
    removeCart,
    updateCart,
    isExisting,
    addCart,
  })
}

async function createCart({ customer_id, product_id, quantity, status }) {
  const db = await connect()
  const values = [customer_id, product_id, quantity, status]
  const sql = `INSERT INTO cart(
    customer_id, 
    product_id, 
    quantity, 
    status)
    VALUES($1,$2,$3,$4) `
  try {
    const result = await db.query(sql, values)
    console.log(result)
    return result
  } catch (error) {
    console.log(error.message)
  }
}

async function getCustomerCart({ Id }) {
  const db = await connect()
  const values = [Id.id, 'active']
  const sql = `SELECT 
  c.cart_id,
  c.created_at,
  c.customer_id,
  c.product_id,
  c.quantity,
  c.status,
  c.quantity*p.price as "total_price",
  p.product_id,
  p.product_name,
  p.barcode as "product_barcode",
  p.details as "product_details",
  p.quantity as "product_quantity",
  p.img as "product_img", 
  p.quantity as "product_qauntity", 
  p.cost_per_unit as "product_cost_per_unit",
  p.price as "product_price_per_unit",
  p.date_expire as "product_date_expire"
FROM cart c
INNER JOIN product p
    ON c.product_id = p.product_id	
WHERE c.customer_id = $1 AND c.status = $2`
  try {
    const result = await db.query(sql, values)
    return result.rows
  } catch (error) {
    console.log(error.message)
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

async function addCart({ quantity, cart_id, status }) {
  const db = await connect()
  const values = [quantity, cart_id, status]
  const sql =
    'UPDATE cart SET quantity = quantity+$1 WHERE cart_id = $2 AND status = $3'

  try {
    const result = await db.query(sql, values)
    return result.rowCount
  } catch (error) {
    console.log(error)
  }
}

async function isExisting({ customer_id, product_id }) {
  const db = await connect()
  const check = [product_id, customer_id]
  try {
    const sql = `SELECT * FROM cart where product_id = $1 AND customer_id = $2 AND status='active'`
    const result = await db.query(sql, check)
    return result
  } catch (error) {
    console.log('Error: ', error)
  }
}

module.exports = query
