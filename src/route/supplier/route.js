
const {
    get_supplier,
    create_supplier,
    update_supplier
} = require('../../controllers/supplier/index')


const customerRouter = ({ router, makeExpressCallback }) => {
    router.get("/", makeExpressCallback(get_supplier))
    router.post("/", makeExpressCallback(create_supplier))
    // router.get("/:id", verifyToken, makeExpressCallback(fetchSingleUser))
    router.put("/:id", makeExpressCallback(update_supplier))
    // router.delete("/delete/:id", verifyToken, makeExpressCallback(deleteUserController))
    // router.post("/login", makeExpressCallback(login))

    return router
}



module.exports = customerRouter