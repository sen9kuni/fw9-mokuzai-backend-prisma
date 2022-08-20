const authenticated = require('express').Router()
const authMiddelware = require('../middleware/auth')
const authenticatedControl = require('../controllers/authenticated')
const uploadProfile = require('../middleware/upload')

authenticated.get('/profile', authMiddelware, authenticatedControl.getProfile)
authenticated.patch('/profile', authMiddelware, authenticatedControl.updateProfile)
authenticated.patch('/user', authMiddelware, authenticatedControl.updateUser)
// authenticated.patch('/user/image', authMiddelware, uploadProfile, authenticatedControl.updateImageProfile)
authenticated.patch('/user/image', uploadProfile, authenticatedControl.updateImageProfile)

authenticated.post('/user/seller/product', authMiddelware, authenticatedControl.createProduct)
authenticated.patch('/user/seller/product/:id', authMiddelware, authenticatedControl.updateProduct)

module.exports = authenticated
