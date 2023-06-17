import UsersServices from '../usuario/service'
import jwt from 'jsonwebtoken' //pacote usado para criar e verificar os tokens
import { handleSuccess, handleError } from '../../common/handle'
import bcrypt from 'bcrypt'

const throwError = () => {
  throw { message: 'Falha ao tentar autenticar o token!' }
}
const _userNotFound = () => {
  throw { message: 'Usuário não encontrado' }
}

// Faz login sindico
export const handleLoginAdmin = async (email, password) => {
  try {
      const user = await UsersServices.getUserFromEmail(email)
      if(user == null) _userNotFound()

        let result = await bcrypt.compare(password, user.password)
          if(result == true) 
          {
            const condominio = await UsersServices.getUserSindico(user)
    
            var token = await jwt.sign(condominio.dataValues, process.env.JWT_SECRET)
            return { condominio, token }
          } else 
          {
            throw 'Senha inválida'
          }
  } catch (e) {
    throw e
  }
}

// Faz login morador
export const handleLoginApp = async (email, password) => {

  try {
    const user = await UsersServices.getUserFromEmail(email)
    if(user == null) _userNotFound()

      let result = await bcrypt.compare(password, user.password)
        if(result == true) 
        {
            var token = await jwt.sign(user.dataValues,  process.env.JWT_SECRET)
            return { user, token }
        } else 
        {
          throw 'Senha inválida'
        }
      } catch (e) {
        throw e
      }
}
export const isAuthenticated = async (req, res, next) => {
  try {
    var token =
      req.body.token || req.query.token || req.headers['x-access-token']

    if (token) {
      jwt.verify(token,  process.env.JWT_SECRET, function(err, decoded) {
        if (err) throwError()
        else {
          req.decoded = decoded
          next()
        }
      })
    } else throwError()
  } catch (e) {
    res.status(400).send(handleError(e))
  }
}

export default { handleLoginAdmin,handleLoginApp, isAuthenticated }
