const makeProductCategoryEntity = ({ data }) => {
  const { name } = data
  const status = 'active'

  if (!name) {
    throw new Error('Category is required.')
  }

  return Object.freeze({
    getName: () => name,
    getStatus: () => status,
  })
}
module.exports = makeProductCategoryEntity
