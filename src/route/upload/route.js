
const {
    upload
} = require('../../middleware/multer/upload-image')

const userRouter = ({ router }) => {
    // router.get("/", express.static('../../img'))
    router.post("/", upload,(req,res)=>{
        if(req.files){
            res.status(201).send("images add succesfully");
        }
        else if(req.files == undefined){
            res.status(400).send("Error: product_images is undefined");
        }
    })
    return router
}



module.exports = userRouter