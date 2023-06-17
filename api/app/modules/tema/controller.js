import Services from './service';
import { handleError, handleSuccess } from '../../common/handle';

// lista os Temas
const findAll = async (req, res) => {
  try {
    const properties = await Services.findAll();
    res.status(200).send(handleSuccess(properties));
  } catch (e) {
    console.log(e);
    res.status(400).send(handleError(e));
  }
}

export default { findAll };
