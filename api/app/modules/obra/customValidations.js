import { isBool, isEmpty, lengthOverflow, isNumber } from '../../common/validations';


export const validateFields = fields => {
  // verificação se o campo está vazio
  if (isEmpty(fields.motivo)) throw 'o motivo deve ser preenchido'
  if (isEmpty(fields.despesa.descricao)) throw 'A descrição deve ser preenchida'
  if (isEmpty(fields.data_prevista)) throw 'A data prevista deve ser preenchida'
  if (isEmpty(fields.data_limite)) throw 'A data limite deve ser preenchida'
  if (!isBool(fields.realizada)) throw 'O campo realizada deve ser preenchido'
  if (!isNumber(fields.despesa.valor)) throw 'Digite apenas números'
  if (lengthOverflow(300, fields.motivo)) throw 'O motivo deve ter tamanho máximo de 300 caracteres'
  if (lengthOverflow(300, fields.despesa.descricao)) throw 'A descrição deve ter tamanho máximo de 300 caracteres'
  

};
