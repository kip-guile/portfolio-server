const SingleProjects = require('../models/singleProjects')
const {
  validateSingleProjectObject,
} = require('../middleware/validateSingleProjectObject')

// controller to add project
const addSingleProject = (req, res) => {
  const { errors, valid } = validateSingleProjectObject(req.body)
  if (!valid) return res.status(400).json(errors)
  const { img, name, details, alt, github, deployed } = req.body

  SingleProjects.findOne({ name }).then((singleProject) => {
    if (singleProject)
      return res.status(400).json({
        message: 'singleProject already saved',
      })
    const newSingleProject = new SingleProjects({
      img,
      name,
      details,
      alt,
      github,
      deployed,
    })

    newSingleProject
      .save()
      .then((singleProject) => {
        return res.status(201).json(singleProject)
      })
      .catch((err) => {
        return res.status(500).json({ message: err.message })
      })
  })
}

// controller to get all movies
async function getSingleProjects(req, res) {
  try {
    const singleProject = await SingleProjects.find({})
    if (singleProject.length === 0) {
      return res.status(404).json({ message: 'no projects available' })
    }
    return res.status(200).json(singleProject)
  } catch (err) {
    res.status(500).json(err.message)
  }
}

// controller to delete photo
async function deleteSingleProject(req, res) {
  const _id = req.params.singleProjectId

  try {
    const singleProject = await SingleProjects.findOne({ _id })
    if (!singleProject) {
      return res.status(404).json({ message: 'singleProject doesnt exist' })
    }
    await SingleProjects.deleteOne({ _id })
    const singleProjects = await SingleProjects.find({})
    return res.status(200).json(singleProjects)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

module.exports = { deleteSingleProject, addSingleProject, getSingleProjects }
