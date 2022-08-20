const admin = require('express').Router()
const adminControl = require('../controllers/admin')

admin.post('/category', adminControl.createCategory)
admin.get('/category', adminControl.getAllCategory)

module.exports = admin
