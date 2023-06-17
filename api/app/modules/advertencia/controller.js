import Services from './service';
import { handleError, handleSuccess } from '../../common/handle';
import { isNumber } from '../../common/validations';
import { validateFields } from './customValidations';
// lista os Advertencias
const findAll = async (req, res) => {
  try {
    const { pessoa_id } = req.query;
    console.log(pessoa_id);
    const properties = await Services.findAll(pessoa_id);
    res.status(200).send(handleSuccess(properties));
  } catch (e) {
    console.log(e);
    res.status(400).send(handleError(e));
  }
};

// busca um agricultor pela sua chave primaria
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

// conta os Advertencias
const count = async (req, res) => {
  try {
    const count = await Services.count();
    res.status(200).send(handleSuccess(count));
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

    const property = await Services.update(req.params.id, req.body);
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

    const profile = await Services.destroy(req.params.id, req.body);
    res.status(204).send(handleSuccess(profile));
  } catch (error) {
    res.status(400).send(handleError(error));
  }
};

export default { findAll, getByPk, count, add, update, destroy };
