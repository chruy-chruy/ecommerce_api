const e = require('cors')
const connect = require('../../config/db')


const query = () => {
    return Object.freeze({
        createCart,
        getCustomerCart,
        removeCart,
        updateCart
    })
}

async function createCart({ customer_id, product_id, quantity, status }) {
    const db = await connect()
    const values = [customer_id, product_id, quantity, status]
    const sql = `INSERT INTO cart(customer_id, product_id, quantity, status)
    VALUES($1,$2,$3,$4) `
    try {
        const result = await db.query(sql, values)
        return result
    } catch (error) {
        console.log(error.message)
    }
}

async function getCustomerCart({ Id }) {
    const db = await connect()
    const values = [Id.id, "active"]
    const sql = `SELECT o.cart_id,o.created_at,o.customer_id,o.product_id,o.quantity,o.status,o.quantity*i.cost_per_unit as "total_price",i.product_id,i.product_name,
    i.barcode as "product_barcode", i.details as "product_details", i.quantity as "product_quantity",
    i.img as "product_img", i.quantity as "product_qauntity", i.cost_per_unit as "product_cost_per_unit",
    i.date_expire as "product_date_expire"
    FROM cart o
    INNER JOIN product i
    ON o.product_id = i.product_id	WHERE o.customer_id = $1 AND o.status = $2`
    try {
        const result = await db.query(sql, values)
        return result
    } catch (error) {
        console.log(error.message)
    }
}

async function removeCart({ data }) {
    const db = await connect()
    const id = ["deleted", data.id]

    const sql = `UPDATE cart SET status = $1 WHERE cart_id = $2`;
    try {
        const result = await db.query(sql, id)
        return result
    } catch (error) {
        console.log("Error: ", error);
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

module.exports = query;