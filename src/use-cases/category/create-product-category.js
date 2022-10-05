const UC_createCart = ({
  categoryDb,
  makeCartmakeProductCategoryEntityEntity,
}) => {
  return async function createProduct(data) {
    const CategoryEntity = makeCartmakeProductCategoryEntityEntity({ data })

    const res = await categoryDb.createProduct({
      name: CategoryEntity.getName(),
      status: CategoryEntity.getStatus(),
    })

    if (res) {
      return 'Added Category Successfully'
    } else {
      throw new Error('Failed to add Category to database')
    }
  }
}

module.exports = UC_createCart
