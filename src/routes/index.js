const routes = require('express').Router()

routes.use('/auth', require('./auth'))
routes.use('/authenticated', require('./authenticated'))
routes.use('/admin', require('./admin'))

module.exports = routes
