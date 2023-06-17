import { isEmpty, lengthOverflow, charValid } from '../../common/validations'

export const validateFields = fields => {
  // verificação se o campo está vazio
  if (isEmpty(fields.tipo)) throw 'o tipo deve ser preenchido'
  if (isEmpty(fields.data_prevista)) throw 'A data prevista deve ser preenchida'
  if (isEmpty(fields.primeira_chamada)) throw 'A hora prevista deve ser preenchida'
  if (isEmpty(fields.segunda_chamada)) throw 'A hora prevista deve ser preenchida'
  if (lengthOverflow(300, fields.descricao)) throw 'A descrição deve ter tamanho máximo de 300 caracteres'
}
