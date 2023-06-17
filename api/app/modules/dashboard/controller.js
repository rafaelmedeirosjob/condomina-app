import Services from './service';
import { handleError, handleSuccess } from '../../common/handle';
import { isNumber } from '../../common/validations';
import { validateFields } from './customValidations';

// traz a receita do condominio
const receita = async (req, res) => {
  try {
    const { condominio } = req.query;
    console.log(condominio);
    const properties = await Services.receita(condominio);
    res.status(200).send(handleSuccess(properties));
  } catch (e) {
    console.log(e);
    res.status(400).send(handleError(e));
  }
};

// grafico de donut 
// { APP WEB }
const donut = async (req, res) => {
  try {
    const { condominio } = req.query;
    const properties = await Services.donut(condominio);
    res.status(200).send(handleSuccess(properties));
  } catch (e) {
    console.log(e);
    res.status(400).send(handleError(e));
  }
};

export default { receita, donut };
