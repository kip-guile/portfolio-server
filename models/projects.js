const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  gridColumn: { type: String, required: true },
  gridRow: { type: String, required: true },
  mid: { type: Boolean, required: true },
  src: { type: String, required: true },
  alt: { type: String, required: true },
  arr: [{ type: String, required: true }],
  name: { type: String, required: true },
  github: { type: String, required: true },
  deployed: { type: String, required: true },
})

const Projects = mongoose.model('project', projectSchema)
module.exports = Projects
