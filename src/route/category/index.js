const express = require('express')

const makeExpressCallback = require('../../express-callback/index')

const categoryRouter = require('./route')
const verifyToken = require('../../middleware/jwt/verifyToken')

const router = express.Router()
const route = categoryRouter({ router, makeExpressCallback })

const services = Object.freeze({
  route,
})

module.exports = services
module.exports = router
