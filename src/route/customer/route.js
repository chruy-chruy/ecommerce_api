
const {
    create_customer,
    get_customer,
    get_single_customer,
    update_customer
} = require('../../controllers/customer/index')


const customerRouter = ({ router, makeExpressCallback }) => {
    router.get("/", makeExpressCallback(get_customer))
    router.post("/", makeExpressCallback(create_customer))
    router.get("/:id", makeExpressCallback(get_single_customer))
    router.patch("/:id", makeExpressCallback(update_customer))
    // router.delete("/delete/:id", verifyToken, makeExpressCallback(deleteUserController))
    // router.post("/login", makeExpressCallback(login))

    return router
}



module.exports = customerRouter