const Projects = require('../models/projects')
const { validateProjectObject } = require('../middleware/validateProjectObject')

// controller to add project
const addProject = (req, res) => {
  //   const { errors, valid } = validateProjectObject(req.body)
  //   if (!valid) return res.status(400).json(errors)
  const {
    gridColumn,
    gridRow,
    mid,
    src,
    alt,
    name,
    github,
    deployed,
    arr,
  } = req.body

  Projects.findOne({ name }).then((project) => {
    if (project)
      return res.status(400).json({
        message: 'project already saved',
      })
    const newProject = new Projects({
      gridColumn,
      gridRow,
      mid,
      src,
      alt,
      name,
      github,
      deployed,
      arr,
    })

    newProject
      .save()
      .then((project) => {
        return res.status(201).json(project)
      })
      .catch((err) => {
        return res.status(500).json({ message: err.message })
      })
  })
}

// controller to get all movies
async function getProjects(req, res) {
  try {
    const project = await Projects.find({})
    if (project.length === 0) {
      return res.status(404).json({ message: 'no projects available' })
    }
    return res.status(200).json(project)
  } catch (err) {
    res.status(500).json(err.message)
  }
}

// controller to delete photo
async function deleteProject(req, res) {
  const id = req.params.projectId

  try {
    const project = await Projects.findOne({ id })
    if (!project) {
      return res.status(404).json({ message: 'project doesnt exist' })
    }
    await Projects.deleteOne({ id })
    const projects = await Projects.find({})
    return res.status(200).json(projects)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

module.exports = { deleteProject, addProject, getProjects }
