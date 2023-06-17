import { isNumber, isEmpty, lengthOverflow } from '../../common/validations';


export const validateFields = fields => {
  // verificação se o campo está vazio
  if (isEmpty(fields.assunto)) throw 'o assunto deve ser preenchido';
  if (isEmpty(fields.data_prevista)) throw 'A data prevista deve ser preenchida';
};
