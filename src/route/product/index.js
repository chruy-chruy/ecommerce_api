const express = require('express')

const makeExpressCallback = require('../../express-callback/index')

const productRouter = require('./route')
const verifyToken = require('../../middleware/jwt/verifyToken')
const { upload } = require('../../middleware/multer/upload-image')

const router = express.Router()
const route = productRouter({ router, upload, makeExpressCallback })

const services = Object.freeze({
  route,
})

module.exports = services
module.exports = router
