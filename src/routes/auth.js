const authRoutes = require('express').Router()
const authController = require('../controllers/auth')
const { body } = require('express-validator')
const bcrypt = require('bcrypt')

const registerValidator = [
  body('email')
    .notEmpty().withMessage('Email Required')
    .isEmail().withMessage('Wrong Email Format'),
  body('password')
    .notEmpty().withMessage('Password Required')
    .isLength({ min: 4 }).withMessage('Password must be more than 4 characters')
    .customSanitizer(
      async val => {
        const hash = await bcrypt.hash(val, 10)
        return hash
      })
]

// const loginValidator = [
//   body('email')
//     .exists({ checkFalsy: true }).withMessage('Enter an Email')
//     .isEmail().withMessage('Wrong Email Format'),

//   body('password')
//     .exists({ checkFalsy: true }).withMessage('Enter a Password')
// ]

authRoutes.post('/register', ...registerValidator, authController.register)
authRoutes.post('/login', authController.login)

module.exports = authRoutes
