require('../db/mongoose')
const User = require('../models/user')

User.findByIdAndUpdate('63e60525546c19bbef8daf72', { age: 1}).then((user) => {
  console.log(user)

  return User.countDocuments({ age: 1})
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})