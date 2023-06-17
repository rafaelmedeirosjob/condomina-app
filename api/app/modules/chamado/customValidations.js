import { isNumber, isEmpty, lengthOverflow } from '../../common/validations';


export const validateFields = fields => {
  // verificação se o campo está vazio
  if (isEmpty(fields.tipo)) throw 'O tipo  deve ser preenchido';
  if (isEmpty(fields.descricao)) throw 'A descrição deve ser preenchida';
};
