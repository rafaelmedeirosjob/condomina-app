import { isNumber, isEmpty, lengthOverflow } from '../../common/validations'


export const validateFields = fields => {
    if (isEmpty(fields.vencimento)) throw 'O vencimento deve ser preenchido'
}
