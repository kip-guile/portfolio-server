const isEmpty = (string) => {
  if (string.trim() === '') return true
  else return false
}

// middleware to validate input
exports.validateProjectObject = (data) => {
  const errors = {}
  let { gridColumn, gridRow, mid, src, alt, name, github, deployed } = data
  gridColumn = gridColumn || ''
  gridRow = gridRow || ''
  src = src || ''
  alt = alt || ''
  name = name || ''
  github = github || ''
  deployed = deployed || ''

  if (isEmpty(gridColumn)) errors.gridColumn = 'gridColumn is required'
  if (isEmpty(gridRow)) errors.gridRow = 'gridRow is required'
  if (isEmpty(mid)) errors.mid = 'mid is required'
  if (isEmpty(src)) errors.src = 'src is required'
  if (isEmpty(alt)) errors.alt = 'alt cant be empty'
  if (isEmpty(name)) errors.name = 'name cant be empty'
  if (isEmpty(github)) errors.github = 'github cant be empty'
  if (isEmpty(deployed)) errors.deployed = 'deployed cant be empty'

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  }
}
