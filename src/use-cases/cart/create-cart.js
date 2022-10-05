const UC_createCart = ({ cartDb, makeCartEntity }) => {
  return async function createCart(data) {
    const CartEntity = makeCartEntity({ data })

    //check if existing product
    const { product_id, customer_id } = data
    const isExisting = await cartDb
      .isExisting({ product_id, customer_id })
      .catch((err) => console.log(err))

    if (isExisting.rowCount > 0) {
      throw new Error('Product is already exists')
    }

    const res = await cartDb.createCart({
      customer_id: CartEntity.getCustomerId(),
      product_id: CartEntity.getProductId(),
      quantity: CartEntity.getQuantity(),
      status: CartEntity.getStatus(),
    })

    if (res) {
      return 'Added product to Cart'
    } else {
      throw new Error('Failed to add product to database table cart.')
    }
  }
}

module.exports = UC_createCart
