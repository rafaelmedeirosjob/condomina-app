import Model from '../sequelize'
import api from '../../utils/request'
const {Condominios, Endereços, Usuarios, Boletos } = Model

const buildBody = async data => {
  const condo = await Condominios.findByPk(data.Pessoas.condominio_id)
  const endereco = await Endereços.findAll({ where: { condominio_id: condo.id}})
  const user = await Usuarios.findAll({ where: { pessoa_id: data.Pessoas.id}})
  var telefone = data.Pessoas.telefone.replace(/\D/g,'');
  var obj = {
      reference: data.id.toString(),
      firstDueDate: data.vencimento,
      numberOfPayments: '1',
      periodicity: 'monthly',
      amount: data.valor,
      instructions: 'Não há juros caso não haja pagamento',
      description: data.tipo,
      customer: {
          document: {
              type: 'CPF',
              value: data.Condominos.cpf
          },
          name: data.Pessoas.nome,
          email: user[0].email,
          phone: {
              areaCode: telefone.substring(0,2),
              number: telefone.substring(2)
          },
          address: {
              postalCode: endereco[0].cep,
              street: endereco[0].rua,
              number: endereco[0].numero,
              district: endereco[0].bairro,
              city: endereco[0].cidade,
              state: endereco[0].estado_sigla
          }
      }
  }
  return obj
}

const create = async data => 
{
  let condo = await Condominios.findByPk(data.Pessoas.condominio_id)
  let obj = await buildBody(data)
  return await api.request('post','recurring-payment/boletos?email='+ condo.email + '&token='+ condo.token, obj).then(
    async response => {
      await Boletos.create({
        code: response.data.boletos[0].code,
        paymentLink: response.data.boletos[0].paymentLink,
        barcode: response.data.boletos[0].barcode,
        dueDate: response.data.boletos[0].dueDate,
        description: obj.description,
        amount: obj.amount,
        morador_id: data.id
      })
      return response.data
    } 
  ).catch(err => {throw new Error(err)})
}

export default { create }
