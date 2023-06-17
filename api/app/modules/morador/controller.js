import Services from './service';
import { handleError, handleSuccess } from '../../common/handle';
import { isNumber } from '../../common/validations';
import { validateFields } from './customValidations';
// lista os Moradores
const findAll = async (req, res) => {
  try {
    const properties = await Services.findAll(req.query);
    res.status(200).send(handleSuccess(properties));
  } catch (e) {
    console.log(e);
    res.status(400).send(handleError(e));
  }
}
const findAllInadiplentes = async (req, res) => {
  try {
    const { condominio } = req.query;
    console.log(condominio);
    const properties = await Services.findAllInadiplentes(condominio);
    res.status(200).send(handleSuccess(properties));
  } catch (e) {
    console.log(e);
    res.status(400).send(handleError(e));
  }
};

const getByPk = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isNumber(id)) throw 'ID inválido';

    const property = await Services.getByPk(id);
    res.status(200).send(handleSuccess(property));
  } catch (error) {
    res.status(400).send(handleError(error));
  }
};

// adiciona um morador
const add = async (req, res) => {
  try {
    validateFields(req.body);
    const property = await Services.add(req.body);
    res.status(200).send(handleSuccess(property));
  } catch (error) {
    console.log(error);
    res.status(500).send(handleError(error));
  }
};

// atualiza um morador
const update = async (req, res) => {
  try {
    validateFields(req.body);
    const property = await Services.update(req.body);
    res.status(200).send(handleSuccess(property));
  } catch (error) {
    console.log(error);
    res.status(400).send(handleError(error));
  }
};

//remove um morador
const destroy = async (req, res) => {
  try {
    if (!isNumber(req.params.id)) throw 'ID inválido';

    const profile = await Services.destroy(req.params.id);
    res.status(204).send(handleSuccess(profile));
  } catch (error) {
    res.status(400).send(handleError(error));
  }
};

export default { findAll, findAllInadiplentes, getByPk, add, update, destroy };
