import Services from './service';
import { handleError, handleSuccess } from '../../common/handle';

// valor em caixa
const getCaixa = async (req, res) => {
  try {
    const { condominio } = req.query;
    const properties = await Services.getCaixa(condominio);
    res.status(200).send(handleSuccess(properties));
  } catch (e) {
    console.log(e);
    res.status(400).send(handleError(e));
  }
};



export default { getCaixa };
