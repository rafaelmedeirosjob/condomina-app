import { isNumber, isEmpty, lengthOverflow } from '../../common/validations';


export const validateFields = fields => {
  // verificação se o campo está vazio
  if (isEmpty(fields.motivo)) throw 'o motivo deve ser preenchido';
  if (isEmpty(fields.limite_reserva)) throw 'o limite da reserva deve ser preenchido';
};
