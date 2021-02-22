const router = require('express').Router()
const {
  addProject,
  deleteProject,
  getProjects,
} = require('../controllers/projectController')

// @route GET api/movies
// @desc Get all movies
// @access Public
router.get('/', getProjects)

// @route POST api/movies
// @desc Add a movie
// @access Public
router.post('/', addProject)

// @route DELETE api/:movieId
// @desc Delete a movie
// @access Public
router.delete('/:projectId', deleteProject)

module.exports = router
