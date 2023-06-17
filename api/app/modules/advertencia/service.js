import Model from '../sequelize';
const { Advertencias, Condominios , Pessoas } = Model;

const buildBody = data => {
  const { bloco , residencia, condominio_id} = data;
  Advertencias.bloco = bloco;
  Advertencias.residencia =residencia;
  Advertencias.condominio_id = condominio_id;

  return Advertencias;
};

const findAll = async (pessoa_id) => {
  let wherePessoa =
  pessoa_id
    ? { required: true, where: { id: pessoa_id } }
    : '';

const query = {
  include: [
    {
      model: Pessoas,
      ...wherePessoa
    }
  ]
};

return await Advertencias.findAll(query);
  
};

const getByPk = async pk => {
  try {

    return await Advertencias.findByPk(pk, {
      attributes: ['residencia','bloco']
    });
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

const add = async data => {
  try {
    return await Advertencias.create(data);
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

const update = async (pk, data) => {
  try {
    const Advertencias = await Advertencias.findByPk(pk);
    if (!Advertencias) {
      throw 'Advertencias não encontrado';
    }
    return await Advertencias.update(buildBody(data));
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

const destroy = async pk => {
  try {
    const Advertencias = await Advertencias.findByPk(pk);
    if (!Advertencias) {
      throw 'Advertencias não encontrado';
    }
    
    return await Advertencias.destroy();
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

export default { findAll, getByPk, add, update, destroy };
