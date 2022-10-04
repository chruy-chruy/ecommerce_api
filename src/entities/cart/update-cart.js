const updateCartEntity = ({ data }) => {
  const { id, quantity } = data
  const status = 'active'
  // console.log(data);

  if (!quantity) {
    throw new Error('quantity is required.')
  }

  return Object.freeze({
    getQuantity: () => quantity,
    getCartId: () => id,
    getStatus: () => status,
  })
}
module.exports = updateCartEntity
