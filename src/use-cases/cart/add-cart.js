const UC_addCart = ({ cartDb, updateCartEntity }) => {
  return async function patch(data) {
    const CartEntity = await updateCartEntity({ data })
    const { id } = data
    const res = await cartDb
      .addCart({
        quantity: CartEntity.getQuantity(),
        status: CartEntity.getStatus(),
        cart_id: CartEntity.getCartId(),
      })
      .catch((err) => console.log(err))

    if (res.rowCount) {
      const { quantity } = res.rows[0]
      if (quantity <= 0) {
        const data = {
          id: id,
        }
        const res = await cartDb.removeCart({ data })
        if (res.rowCount) {
          return {
            message: '0 quantity Cart deleted',
          }
        }
      }
    }

    if (res.rowCount) {
      return {
        message: 'Updated Successfully',
      }
    } else {
      throw new Error('Failed to Update Cart')
    }
  }
}
module.exports = UC_addCart
