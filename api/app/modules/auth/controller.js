import Services from './service'
import { handleSuccess, handleError } from '../../common/handle'

// Faz login Painel Admin
const handleLoginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body
    //
    if (!email || !password)
      throw { message: 'Você deve informar email e senha' }
    //
    res
      .status(200)
      .send(handleSuccess(await Services.handleLoginAdmin(email, password)))
  } catch (e) {
    console.log(e)
    res.status(401).send(handleError(e))
  }
}
// Faz login App
const handleLoginApp = async (req, res) => {
  try {
    const { email, password } = req.body
    //
    if (!email || !password)
      throw { message: 'Você deve informar email e senha' }
    //
    res
      .status(200)
      .send(handleSuccess(await Services.handleLoginApp(email, password)))
  } catch (e) {
    console.log(e)
    res.status(401).send(handleError(e))
  }
}

export default { handleLoginAdmin, handleLoginApp }
