const router = require('express').Router()
const {
  addSingleProject,
  deleteSingleProject,
  getSingleProjects,
} = require('../controllers/singleProjectController')

// @route GET api/movies
// @desc Get all movies
// @access Public
router.get('/', getSingleProjects)

// @route POST api/movies
// @desc Add a movie
// @access Public
router.post('/', addSingleProject)

// @route DELETE api/:movieId
// @desc Delete a movie
// @access Public
router.delete('/:singleProjectId', deleteSingleProject)

module.exports = router
