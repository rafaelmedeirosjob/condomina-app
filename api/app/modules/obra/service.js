import Model from '../sequelize'
const { Obras, Despesas } = Model

const findAll = async (req) => {
  let whereCondo =
  req.condominio
    ? { required: true, where: { condominio_id: req.condominio } }
    : ''

const query = {
  include: [
    {
      model: Despesas,
      ...whereCondo
    }
  ],
  offset: ((req.page-1)*req.limit),
  limit: req.limit
}

return await Obras.findAndCountAll(query)
  
}

const getByPk = async pk => {
    return await Obras.findByPk(pk,{ include: {model: Despesas}})
}

const add = async data => {
  console.log(data)
    let despesa = await Despesas.create(data.despesa)
    data.despesa_id = despesa.id
    return await Obras.create(data)
}

const update = async (data) => {
    const obra = await Obras.findByPk(data.id)
    if (!obra) {
      throw 'Obras não encontrado'
    }
    console.log(data.despesa)
    const despesa = await Despesas.findByPk(data.despesa.id)
    if (!despesa) {
      throw 'Despesas não encontrado'
    }
    await despesa.update(data.despesa)
    return await obra.update(data)
}

const destroy = async pk => {
    const obra = await Obras.findByPk(pk)
    
    if (!obra) {
      throw 'Obras não encontrado'
    }
    const despesa = await Despesas.findByPk(obra.despesa_id)

    await obra.destroy()
    return await despesa.destroy()
}

export default { findAll, getByPk, add, update, destroy }
