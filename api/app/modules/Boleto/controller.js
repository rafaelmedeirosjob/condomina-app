import Services from './service'
import { handleError, handleSuccess } from '../../common/handle'
import { validateFields } from './customValidations';
// cria um boleto
const create = async (req, res) => {
    try {
      validateFields(req.body)
      const property = await Services.create(req.body)
      res.status(200).send(handleSuccess(property))
    } catch (error) {
      console.log(error)
      res.status(500).send(handleError(error))
    }
}
export default { create }
