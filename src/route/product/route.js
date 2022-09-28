
const {
    get_product,
    create_product,
    update_product
} = require('../../controllers/product/index')


const productRouter = ({ router, makeExpressCallback }) => {
    router.get("/", makeExpressCallback(get_product))
    router.post("/", makeExpressCallback(create_product))
    // router.get("/:id", verifyToken, makeExpressCallback(fetchSingleUser))
    router.patch("/:id", makeExpressCallback(update_product))
    // router.delete("/delete/:id", verifyToken, makeExpressCallback(deleteUserController))
    // router.post("/login", makeExpressCallback(login))

    return router
}



module.exports = productRouter