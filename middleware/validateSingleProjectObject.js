const isEmpty = (string) => {
  if (string.trim() === '') return true
  else return false
}

// middleware to validate input
exports.validateSingleProjectObject = (data) => {
  const errors = {}
  let { img, details, alt, name, github, deployed } = data
  img = img || ''
  details = details || ''
  alt = alt || ''
  name = name || ''
  github = github || ''
  deployed = deployed || ''

  if (isEmpty(img)) errors.img = 'img is required'
  if (isEmpty(details)) errors.details = 'details is required'
  if (isEmpty(alt)) errors.alt = 'alt cant be empty'
  if (isEmpty(name)) errors.name = 'name cant be empty'
  if (isEmpty(github)) errors.github = 'github cant be empty'
  if (isEmpty(deployed)) errors.deployed = 'deployed cant be empty'

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  }
}
