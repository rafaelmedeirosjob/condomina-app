import Services from './service'
import { handleError, handleSuccess } from '../../common/handle'
import { validateFields } from './customValidations'

const getAllInadiplenciasMorador = async (req, res) => {
  try {
    const { morador_id} = req.query
    const properties = await Services.getAllInadiplenciasMorador(morador_id)
    res.status(200).send(handleSuccess(properties))
  } catch (e) {
    console.log(e)
    res.status(400).send(handleError(e))
  }
}

// adiciona uma inadiplencia
const add = async (req, res) => {
  try {
    validateFields(req.body)
    const property = await Services.add(req.body)
    res.status(200).send(handleSuccess(property))
  } catch (error) {
    console.log(error)
    res.status(500).send(handleError(error))
  }
}

// atualiza uma inadiplencia
const update = async (req, res) => {
  try {
    const property = await Services.update(req.body)
    res.status(200).send(handleSuccess(property))
  } catch (error) {
    console.log(error)
    res.status(400).send(handleError(error))
  }
}

export default { getAllInadiplenciasMorador, add, update }
