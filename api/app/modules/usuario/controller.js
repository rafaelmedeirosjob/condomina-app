import Services from './service';
import { handleError, handleSuccess } from '../../common/handle';

const { Usuarios } = require('../sequelize');

// lista de Usuários
const findAll = async (req, res) => {
  try {
    res.status(200).send(handleSuccess(await Services.findAll()));
  } catch (e) {
    res.status(400).send(handleError(e));
  }
};

// busca uma Usuários pela sua chave primaria
const findOne = async (req, res) => {
  try {
    const { id } = req.params;

    res.status(200).send(handleSuccess(await Services.findByPk(id)));
  } catch (e) {
    res.status(400).send(handleError(e));
  }
};

// adiciona uma Usuário
const create = async (req, res) => {
  try {
    const { name, password, cpf } = req.body;
    res
      .status(200)
      .send(handleSuccess(await Services.create({ name, password, cpf })));
  } catch (e) {
    res.status(400).send(handleError(e));
  }
};
const update = async (req, res) => {
  try {
    const { name, password, cpf } = req.body;
    res
      .status(200)
      .send(handleSuccess(await Services.update({ name, password, cpf })));
  } catch (e) {
    res.status(400).send(handleError(e));
  }
};

//remove um usuário
const destroy = async (req, res) => {
  return Usuarios.findByPk(req.params.id)
    .then(Usuarios => {
      if (!Usuarios) {
        return res.status(404).send({
          message: 'Usuarios Not Found'
        });
      }
      return Usuarios.destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

export default { findAll, findOne, create, update, destroy };
