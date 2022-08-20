const adminModel = require('../models/admin')
const response = require('../helpers/standardRespond')

exports.createCategory = async (req, res) => {
  const category = await adminModel.createCategory(req.body)
  if (category) {
    return response(res, 'create success', category)
  } else {
    return response(res, 'failed', null, null, 404)
  }
}

exports.getAllCategory = async (req, res) => {
  const categorys = await adminModel.getAllCategory()
  if (categorys) {
    return response(res, 'success', categorys)
  } else {
    return response(res, 'failed', null, null, 404)
  }
}
