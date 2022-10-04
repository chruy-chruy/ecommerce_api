const makeOrderDetailsEntity = ({ orders, checkArray, order_id }) => {
  const {
    barcode,
    product_name,
    quantity,
    price,
    total_price,
    cart_id,
    product_id,
  } = orders
  const status = 'active'

  if (!order_id) {
    throw new Error('order_id is required at products array ' + checkArray)
  }
  if (!cart_id) {
    throw new Error('cart_id is required at products array ' + checkArray)
  }
  if (!barcode) {
    throw new Error('barcode is required at productsarray ' + checkArray)
  }
  if (!product_name) {
    throw new Error('product_name is required at product array ' + checkArray)
  }
  if (!quantity) {
    throw new Error('quantity i required at product array ' + checkArray)
  }
  if (!price) {
    throw new Error('price is required at product array ' + checkArray)
  }
  if (!total_price) {
    throw new Error('total_price is required at product array ' + checkArray)
  }
  if (!product_id) {
    throw new Error('product_id is required at product array ' + checkArray)
  }

  return Object.freeze({
    getProductName: () => product_name,
    getBarcode: () => barcode,
    getQuantity: () => quantity,
    getPrice: () => price,
    getStatus: () => status,
    getOrder_id: () => order_id,
    getTotalPrice: () => total_price,
    getCartId: () => cart_id,
    getProductId: () => product_id,
  })
}

module.exports = makeOrderDetailsEntity
