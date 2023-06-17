import { isEmpty } from '../../common/validations';


export const validateFields = fields => {
  // verificação se o campo está vazio
  if (isEmpty(fields.vencimento)) throw 'O vencimento deve ser preenchido';
  if (isEmpty(fields.tipo)) throw 'O tipo deve ser preenchido';
  if (isEmpty(fields.valor)) throw 'O valor deve ser preenchido';
};
