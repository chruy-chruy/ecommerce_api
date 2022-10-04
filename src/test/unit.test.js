const {
    makeCartEntity,
    updateCartEntity
} = require('../entities/cart/index')

describe('module Add Cart test', () => {

    //test add cart
    test('customer_id is Required', () => {
        const data = {
            customer_id : 1,
            product_id : 1,
            quantity : null
        }
        const createCart = makeCartEntity({data})
        
        const toBe = {
            customer_id : createCart.getCustomerId(),
            product_id : createCart.getProductId(),
            quantity : createCart.getQuantity()
        }
        expect(data).toThrow('customer_id is Required');
      });


})