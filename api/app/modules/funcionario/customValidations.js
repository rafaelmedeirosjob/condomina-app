import { isNumber, isEmpty, lengthOverflow } from '../../common/validations';


export const validateFields = fields => {
  // verificação se o campo está vazio
  if (isEmpty(fields.cargo)) throw 'O cargo deve ser preenchido';
  if (isEmpty(fields.vinculo)) throw 'O vinculo deve ser preenchido';
};
