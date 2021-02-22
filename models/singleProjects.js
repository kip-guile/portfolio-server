const mongoose = require('mongoose')

const singleProjectSchema = new mongoose.Schema({
  alt: { type: String, required: true },
  details: { type: String, required: true },
  img: { type: String, required: true },
  name: { type: String, required: true },
  github: { type: String, required: true },
  deployed: { type: String, required: true },
})

const SingleProjects = mongoose.model('singleProject', singleProjectSchema)
module.exports = SingleProjects
