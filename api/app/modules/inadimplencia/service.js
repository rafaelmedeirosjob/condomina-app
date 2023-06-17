import Model from '../sequelize'
const { Inadimplencias, Moradores, Pessoas } = Model

const getAllInadiplenciasMorador = async (morador_id) => {
  
  const query = {
    include: [
      {
        model: Moradores,
        where: { id: morador_id},
        include:[
          {
            model: Pessoas
          }
        ]
      }
    ]
  }

  return await Inadimplencias.findAll(query)

}

const add = async data => {
    return await Inadimplencias.create(data)
}

const update = async data => {
  console.log(data)
  const inadiplencia = await Inadimplencias.findByPk(data.id);
  if (!inadiplencia) {
    throw 'Inadimplencias não encontrada';
  }
  return await inadiplencia.update({ativo: false, dt_quitacao: new Date()})
}
export default { getAllInadiplenciasMorador, update, add }
