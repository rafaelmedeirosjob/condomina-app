import Services from './service'
import { handleError, handleSuccess, handleValidationError } from '../../common/handle'
import { isNumber } from '../../common/validations'
import { validateFields } from './customValidations'
// lista os Assembleias
const findAll = async (req, res) => {
  try {
    const properties = await Services.findAll(req.query)
    res.status(200).send(handleSuccess(properties))
  } catch (e) {
    res.status(400).send(handleError(e))
  }
}

// busca um assembleia pela sua chave primaria
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

// conta os Assembleias
const count = async (req, res) => {
  try {
    const count = await Services.count()
    res.status(200).send(handleSuccess(count))
  } catch (error) {
    res.status(400).send(handleError(error))
  }
}

// adiciona um Assembleias
const add = async (req, res) => {
  try{
    validateFields(req.body.assembleia)
    try {
      const property = await Services.add(req.body)
      res.status(200).send(handleSuccess(property))
    } catch (error) {
      console.log(error)
      res.status(500).send(handleError(error))
    }
  } catch (msg) { console.log(msg)
    res.status(500).send(handleValidationError(msg))
  }
}

// atualiza um Assembleias
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

//remove um Assembleias
const destroy = async (req, res) => {
  try {
    if (!isNumber(req.params.id)) throw 'ID inválido'

    const profile = await Services.destroy(req.params.id, req.body)
    res.status(204).send(handleSuccess(profile))
  } catch (error) {
    res.status(400).send(handleError(error))
  }
}

export default { findAll, getByPk, count, add, update, destroy }
