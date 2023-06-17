import Model from '../sequelize';
const { Chamados, Condominios , Pessoas } = Model;

const buildBody = data => {
  const { bloco , residencia, condominio_id} = data;
  Chamados.bloco = bloco;
  Chamados.residencia =residencia;
  Chamados.condominio_id = condominio_id;

  return Chamados;
};

const findAll = async (req) => {
  let where =
  req.condominio
    ? { required: true, where: { condominio_id: req.condominio } }
    : '';

const query = {
  include: [
    {
      model: Pessoas,
      ...where
    }
  ],
  offset: ((req.page-1)*req.limit),
  limit: req.limit
};

return await Chamados.findAndCountAll(query);
  
};

const getByPk = async pk => {
  try {

    return await Chamados.findByPk(pk, {
      attributes: ['residencia','bloco']
    });
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

const add = async data => {
  try {
    return await Chamados.create(data);
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

const update = async (pk, data) => {
  try {
    const Chamados = await Chamados.findByPk(pk);
    if (!Chamados) {
      throw 'Chamados não encontrado';
    }
    return await Chamados.update(buildBody(data));
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

const destroy = async pk => {
  try {
    const Chamados = await Chamados.findByPk(pk);
    const Pessoas = await Pessoas.findByPk(Chamados.pessoa_id)
    if (!Chamados) {
      throw 'Chamados não encontrado';
    }
    await Chamados.destroy()
    
    return await Pessoas.destroy();
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

export default { findAll, getByPk, add, update, destroy };
