const connect = require('../../config/db')

const query = () => {
  return Object.freeze({
    createOrder,
    createOrderDetails,
    getOrder,
    getOrderDetailsbyOrder,
    checkCart,
    updateCart,
    getOrderbyCustomer,
  })
}

async function createOrder({
  customer_id,
  total_price,
  address,
  approved_by,
  shipping_type,
  order_status,
  status,
}) {
  const db = await connect()
  const values = [
    customer_id,
    total_price,
    address,
    approved_by,
    shipping_type,
    order_status,
    status,
  ]
  const sql = `INSERT INTO orders (customer_id, total_price, address,approved_by, shipping_type, order_status,status)
    VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING order_id`
  try {
    const result = await db.query(sql, values)
    return result.rows
  } catch (error) {
    console.log(error)
    return error
  }
}

async function createOrderDetails({
  product_name,
  barcode,
  quantity,
  price,
  status,
  order_id,
  total_price,
  product_id,
}) {
  const db = await connect()
  //get prouct quantity
  const get_product_values = [product_id]
  const get_product = `SELECT quantity FROM product WHERE status = 'active' AND product_id = $1`

  //insert product details to order_details
  const order_values = [
    product_name,
    barcode,
    quantity,
    price,
    status,
    order_id,
    total_price,
  ]
  const order_sql = `INSERT INTO order_details (product_name, barcode, quantity,price,status,order_id,total_price)
    VALUES($1,$2,$3,$4,$5,$6,$7)`

  try {
    //insert product details to order_details
    const result = await db.query(order_sql, order_values)

    //deduct the product order quantity to database
    const product_values = [quantity, product_id]
    const product_sql = `UPDATE product SET quantity = quantity-$1 WHERE product_id = $2`
    update_product = await db.query(product_sql, product_values)

    return result
  } catch (error) {
    console.log(error)
    return error
  }
}

async function checkCart(cart_id) {
  const db = await connect()
  const cart_values = ['active', cart_id]
  const cart_sql = `SELECT * FROM cart WHERE status = $1 AND cart_id = $2`
  try {
    const result = await db.query(cart_sql, cart_values)
    return result.rowCount
  } catch (error) {
    console.log(error)
    return error.message
  }
}

async function getOrderbyCustomer(customer_id) {
  const db = await connect()
  const values = ['active', customer_id]
  const sql = `SELECT * FROM orders WHERE status = $1 AND customer_id = $2 ORDER BY order_id DESC`
  try {
    const result = await db.query(sql, values)
    return result.rows
  } catch (error) {
    console.log(error)
    return error.message
  }
}

async function updateCart(cart_id) {
  const db = await connect()
  const cart_values = ['done', cart_id]
  const cart_sql = `UPDATE cart SET status = $1 WHERE cart_id = $2`
  try {
    const result = await db.query(cart_sql, cart_values)
    return result.rowCount
  } catch (error) {
    console.log(error)
    return error.message
  }
}

async function getOrder() {
  const db = await connect()
  const sql = `SELECT * FROM orders WHERE status='active' ORDER BY order_id DESC`
  try {
    const result = await db.query(sql)
    return result.rows
  } catch (error) {
    console.log(error)
    return error.message
  }
}

async function getOrderDetailsbyOrder({ order_id }) {
  const db = await connect()
  const id = [order_id.id]
  try {
    const sql = `SELECT * FROM order_details where order_id = $1 ORDER BY order_details_id DESC`
    const res = await db.query(sql, id)
    return res.rows
  } catch (error) {
    console.log('Error: ', error)
  }
}

module.exports = query
