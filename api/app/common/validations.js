export const isNumber = number => {
  return !isNaN(number)
}

export const isEmpty = str => {
  return !str || 0 === str.length
}

export const isBool = bool => {
  return typeof bool === 'boolean'
}

export const lengthOverflow = (limit, field) => {
  return field.length > limit
}

export const charValid = str => {
  return str.match(/[^#%&*:<>?/{|}]+/)
}  



