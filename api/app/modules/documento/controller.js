import { handleError, handleSuccess } from '../../common/handle'
import Services from './service';
// lista os documentos
const findAll = async (req, res) => {
  try {
    const properties = await Services.findAll(req.params.id);
    res.status(200).send(handleSuccess(properties));
  } catch (e) {
    res.status(400).send(handleError(e));
  }
};
// adiciona um arquivo no s3
const add = async (req, res) => {
  try {
    console.log(req.file)
    const properties = await Services.add(req);
    res.status(200).send(handleSuccess(properties));
  } catch (error) {
    console.log(error);
    res.status(500).send(handleError(error));
  }
};
//remove um arquivo do s3
const destroy = async (req, res) => {
  try {
    const profile = await Services.destroy(req.params.id, req.body);
    res.status(204).send(handleSuccess(profile));
  } catch (error) {
    res.status(400).send(handleError(error));
  }
};

export default { findAll, add, destroy };
