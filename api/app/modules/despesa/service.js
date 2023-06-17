import Model from '../sequelize';
const { Despesas, Condominios } = Model;

const findAll = async (req) => {
  let whereCondo =
  req.condominio
      ? { required: true, where: { id: req.condominio } }
      : ''

  const query = {
    include: [
      {
        model: Condominios,
        ...whereCondo
      }
    ],
    offset: ((req.page-1)*req.limit),
    limit: req.limit
  }
  return await Despesas.findAndCountAll(query)
}

const add = async data => {
    return await Despesas.create(data)
}

const efetuaPagamento = async (data) => {
  try {
    // fazer parte de enviar comprovante ao bucket s3
    let despesa = await Despesas.findByPk(data.id)
    if (!despesa) {
      throw 'Despesas não encontrado'
    }
    let condo = await Condominios.findByPk(data.condominio_id)
    if (!condo) {
      throw 'Condominios não encontrado'
    }
    var condominio = { caixa: condo.caixa-despesa.valor} 
    console.log(condo.caixa)
    await condo.update(condominio)
    return await despesa.update(data)
  } catch (error) {
    throw 'Ocorreu um erro no banco'
  }
};

const getByPk = async pk => {
  return await Despesas.findByPk(pk)
}

const update = async (data) => {
  try {
    const despesa = await Despesas.findByPk(data.id);
    if (!despesa) {
      throw 'Despesas não encontrado'
    }
    return await despesa.update(data)
  } catch (error) {
    throw 'Ocorreu um erro no banco'
  }
};

const destroy = async pk => {
  try {
    const despesa = await Despesas.findByPk(pk);
    if (!despesa) {
      throw 'Despesas não encontrado'
    }


    return await despesa.destroy()
  } catch (error) {
    throw 'Ocorreu um erro no banco'
  }
};

export default { findAll, getByPk, efetuaPagamento, add, update, destroy }
