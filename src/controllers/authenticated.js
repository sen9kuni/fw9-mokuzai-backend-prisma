const authenticatedModel = require('../models/authenticated')
const response = require('../helpers/standardRespond')

exports.getProfile = async (req, res) => {
  const id = parseInt(req.authUser.id)
  const profile = await authenticatedModel.getProfile(id)
  if (profile) {
    return response(res, 'detail profile', profile)
  } else {
    return response(res, 'profile not found', null, null, 404)
  }
}

exports.updateProfile = async (req, res) => {
  const id = parseInt(req.authUser.id)
  const profile = await authenticatedModel.updateProfile(id, req.body)
  if (profile) {
    return response(res, 'profile updated', profile)
  } else {
    return response(res, 'profile not found', null, null, 404)
  }
}

exports.updateUser = async (req, res) => {
  const id = parseInt(req.authUser.id)
  const user = await authenticatedModel.updateUser(id, req.body)
  if (user) {
    return response(res, 'user updated', user)
  } else {
    return response(res, 'user not found', null, null, 404)
  }
}

exports.createProduct = async (req, res) => {
  const id = parseInt(req.authUser.id)
  const product = await authenticatedModel.createProduct(id, req.body)
  if (product) {
    return response(res, 'product create success', product)
  } else {
    return response(res, 'product create failed', null, null, 404)
  }
}

exports.updateProduct = async (req, res) => {
  const { id } = req.params
  const product = await authenticatedModel.updateProduct(id, req.body)
  if (product) {
    return response(res, 'product update success', product)
  } else {
    return response(res, 'product update failed', null, null, 404)
  }
}

exports.updateImageProfile = async (req, res) => {
  const id = parseInt(req.authUser.id)
  let filename = null
  if (req.file) {
    filename = req.file.path
  }
  const profilePic = await authenticatedModel.updateProfilePicture(id, filename)
  if (profilePic) {
    return response(res, 'profile pic update success', profilePic)
  } else {
    return response(res, 'profile pic update failed', null, null, 404)
  }
  // const array = req.files.map((o) => o.originalname)
  // console.log(array)
}
