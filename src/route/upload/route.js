const { upload } = require('../../middleware/multer/upload-image')

const userRouter = ({ router, verifyToken }) => {
  router.post('/', verifyToken, upload, (req, res) => {
    try {
      if (req.files) {
        res.status(201).send('images add succesfully')
      } else if (req.files == undefined) {
        res.status(400).send('Error: product_images is undefined')
      }
    } catch (error) {
      res.status(400).send('Error: ' + error)
    }
  })
  return router
}

module.exports = userRouter
