const prisma = require('../helpers/prisma')

exports.getProfile = async (id) => {
  id = parseInt(id, 10)
  const profile = await prisma.users.findUnique({
    where: {
      id
    },
    include: {
      profile: {
        where: {
          user_id: id
        },
        select: {
          fullname: true,
          gender: true,
          desc: true,
          picture: true
        }
      }
    }
  })
  return profile
}

exports.updateProfile = async (id, data) => {
  id = parseInt(id, 10)
  const profile = await prisma.profile.update({
    where: {
      user_id: id
    },
    data
  })
  return profile
}

exports.updateProfilePicture = async (id, data) => {
  id = parseInt(id, 10)
  const profile = await prisma.profile.update({
    where: {
      user_id: id
    },
    data: {
      picture: data
    }
  })
  return profile
}

exports.updateUser = async (id, data) => {
  id = parseInt(id, 10)
  const user = await prisma.users.update({
    where: {
      id
    },
    data
  })
  return user
}

exports.createProduct = async (id, data) => {
  // data.seller_id = id
  const product = await prisma.products.create({
    data: {
      seller_id: parseInt(id, 10),
      name: data.name,
      desc: data.desc,
      sku: data.sku,
      category_id: parseInt(data.category_id),
      quantity: parseInt(data.quantity, 10),
      price: parseInt(data.price),
      condition: data.condition
    }
  })
  return product
}

exports.updateProduct = async (id, data) => {
  id = parseInt(id, 10)
  const product = await prisma.products.update({
    where: {
      id
    },
    data
  })
  return product
}
