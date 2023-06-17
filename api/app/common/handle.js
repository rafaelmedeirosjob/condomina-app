export const handleSuccess = data => {
  return {
    success: true,
    data: data
  }
}

export const handleError = error => {
  return {
    success: false,
    message: error,
    code: error.code
  }
}

  export const handleValidationError = msg => {
    console.log(msg)
    return {
      success: false,
      message: msg
    }
}
