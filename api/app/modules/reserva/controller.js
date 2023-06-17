import Services from './service';
import { handleError, handleSuccess } from '../../common/handle';
import { isNumber } from '../../common/validations';
import { validateFields } from './customValidations';
// lista os Reservas
const findAll = async (req, res) => {
  try {
    const { condominio } = req.query;
    const properties = await Services.findAll(condominio);
    res.status(200).send(handleSuccess(properties));
  } catch (e) {
    console.log(e);
    res.status(400).send(handleError(e));
  }
};


const findForArea = async (req, res) => {
  try {
    const { condominio, area } = req.query;
    const properties = await Services.findForArea(condominio,area);
    res.status(200).send(handleSuccess(properties));
  } catch (e) {
    console.log(e);
    res.status(400).send(handleError(e));
  }
};

// adiciona um Reservas
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

// atualiza um Reservas
const update = async (req, res) => {
  try {
    const property = await Services.update(req.body);
    res.status(200).send(handleSuccess(property));
  } catch (error) {
    console.log(error);
    res.status(400).send(handleError(error));
  }
};

//remove um Reservas
const destroy = async (req, res) => {
  try {
    if (!isNumber(req.params.id)) throw 'ID inválido';

    const profile = await Services.destroy(req.params.id, req.body);
    res.status(204).send(handleSuccess(profile));
  } catch (error) {
    res.status(400).send(handleError(error));
  }
};

export default { findAll,findForArea, add, update, destroy };
