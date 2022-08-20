const prisma = require('../helpers/prisma')

exports.createCategory = async (data) => {
  const category = await prisma.category.create({
    data
  })
  return category
}

exports.getAllCategory = async () => {
  const categorys = await prisma.category.findMany()
  return categorys
}
