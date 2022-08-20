const authModel = require('../models/auth')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { APP_SECRET } = process.env

exports.register = async (req, res) => {
  const user = await authModel.register(req.body)
  return res.json({
    success: true,
    message: 'Register Successfuly',
    results: user
  })
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  const user = await authModel.getUserByEmail(email)
  const results = user
  if (results[0].length < 1) {
    return res.json({
      success: false,
      message: 'User not Found'
    })
  }
  bcrypt.compare(password, results[0].password)
    .then((cpRes) => {
      if (cpRes) {
        const token = jwt.sign({ id: results[0].id }, APP_SECRET || 'secretKey')
        const id = results[0].id
        const roles = results[0].roles
        // return response(res, 'Login Success', {id, roles, token});
        return res.json({
          success: false,
          message: 'Login Success',
          id,
          roles,
          token
        })
      }
      return res.json({
        success: false,
        message: 'Check your email and pasword1'
      })
    })
    .catch((e) => {
      console.log(e)
      return res.json({
        success: false,
        message: 'Check your email and pasword2'
      })
    })
}
