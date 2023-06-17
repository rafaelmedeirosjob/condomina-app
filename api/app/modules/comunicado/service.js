import Model from '../sequelize';
const { Comunicados, Condominios , Pessoas, Moradores } = Model;

const buildBody = data => {
  const { bloco , residencia, condominio_id} = data;
  Comunicados.bloco = bloco;
  Comunicados.residencia =residencia;
  Comunicados.condominio_id = condominio_id;

  return Comunicados;
};

const findAll = async (req) => {
  let whereCondo =
  req.condominio
    ? { required: true, where: { id: req.condominio } }
    : '';

const query = {
  include: [
    {
      model: Condominios,
      ...whereCondo
    }
  ],
  offset: ((req.page-1)*req.limit),
  limit: req.limit
};

return await Comunicados.findAndCountAll(query);
  
};

const getByPk = async pk => {
    return await Comunicados.findByPk(pk, {
      attributes: ['residencia','bloco']
    })
};

const add = async data => {
  try {
    // se a mensagem for para alguém, verifica se esse alguém é do condominio
    if(data.destino) {
      let whereMorador =
      data.condominio_id
        ? { required: true, where: { condominio_id: data.condominio_id, id: data.destino } }
        : '';
    
    const query = {
      include: [
        {
          model: Pessoas,
          ...whereMorador
        }
      ]
    };
      const morador = await Moradores.findOne(query)
      if(!morador) throw 'Moradores não é deste condominio'
    }
    return await Comunicados.create(data);
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
}

const update = async (pk, data) => {
  try {
    const Comunicados = await Comunicados.findByPk(pk);
    if (!Comunicados) {
      throw 'Comunicados não encontrado';
    }
    return await Comunicados.update(buildBody(data));
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

const destroy = async pk => {
  try {
    const Comunicados = await Comunicados.findByPk(pk);
    if (!Comunicados) {
      throw 'Comunicados não encontrado';
    }
    
    
    return await Comunicados.destroy();
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

export default { findAll, getByPk, add, update, destroy };
