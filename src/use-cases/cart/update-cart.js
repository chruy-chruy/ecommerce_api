const UC_updateCart = ({ cartDb, updateCartEntity }) => {
  return async function patch(data) {
    const CartEntity = await updateCartEntity({ data })

    const res = await cartDb
      .updateCart({
        quantity: CartEntity.getQuantity(),
        status: CartEntity.getStatus(),
        cart_id: CartEntity.getCartId(),
      })
      .catch((err) => console.log(err))

    if (res) {
      return {
        message: 'updated succesfully',
      }
    } else {
      throw new Error('Failed to Update Cart')
    }
  }
}
module.exports = UC_updateCart
