import Services from './service'
import { handleError, handleSuccess, handleValidationError } from '../../common/handle'
import { isNumber } from '../../common/validations'
import { validateFields } from './customValidations'
// lista os Obras
const findAll = async (req, res) => {
  try {
    const properties = await Services.findAll(req.query)
    res.status(200).send(handleSuccess(properties))
  } catch (e) {
    console.log(e)
    res.status(400).send(handleError(e))
  }
}

const getByPk = async (req, res) => {
  try {
    const { id } = req.params
    if (!isNumber(id)) throw 'ID inválido'

    const property = await Services.getByPk(id)
    res.status(200).send(handleSuccess(property))
  } catch (error) {
    res.status(400).send(handleError(error))
  }
}

// conta os Obras
const count = async (req, res) => {
  try {
    const count = await Services.count()
    res.status(200).send(handleSuccess(count))
  } catch (error) {
    res.status(400).send(handleError(error))
  }
}

// adiciona um obra
const add = async (req, res) => {
  try{
    validateFields(req.body)
      try {
      const property = await Services.add(req.body)
      res.status(200).send(handleSuccess(property))
      } catch (error) {
      res.status(500).send(handleError(error))
      }
    } catch (msg) {
      res.status(500).send(handleValidationError(msg))
    }
}

// atualiza um obra
const update = async (req, res) => {
  try{
    validateFields(req.body)
    try {
    const property = await Services.update(req.body)
    res.status(200).send(handleSuccess(property))
    } catch (error) {
      res.status(500).send(handleError(error))
    }
    } catch (msg) {
      res.status(500).send(handleValidationError(msg))
    }
}

//remove um obra
const destroy = async (req, res) => {
  try {
    if (!isNumber(req.params.id)) throw 'ID inválido'

    const profile = await Services.destroy(req.params.id)
    res.status(204).send(handleSuccess(profile))
  } catch (error) {
    res.status(400).send(handleError(error))
  }
}

export default { findAll, getByPk, count, add, update, destroy }
