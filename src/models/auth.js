const prisma = require('../helpers/prisma')

exports.register = async (data) => {
  const user = await prisma.users.create({
    data
  })
  const profile = await prisma.profile.create({
    data: {
      user_id: user.id
    }
  })
  return (profile, user)
}

exports.getUserByEmail = async (email) => {
  const user = await prisma.users.findMany({
    where: {
      email
    }
  })
  return user
}
