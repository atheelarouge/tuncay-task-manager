require('../playground/promises-chaining')
const Task = require('../models/task')

const _id = '63e7d4b85f23cdf5ab44c6dc'

// Task.findByIdAndDelete(_id).then((task) => {
//   console.log(task)
// }).catch((e) => {
//   console.log(e)
// })

Task.deleteMany({ completed: false}).then((tasks) => {
  console.log(tasks)
}).catch((e) => {
  console.log(e)
})