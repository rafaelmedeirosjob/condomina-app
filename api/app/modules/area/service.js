import Model from '../sequelize';
const { Areas, Condominios , Pessoas } = Model;

const findAll = async (condominio) => {
  let where =
  condominio
    ? { required: true, where: { id: condominio } }
    : '';

const query = {
  include: [
    {
      model: Condominios,
      ...where
    }
  ]
};

return await Areas.findAll(query);
  
};



const add = async data => {
  try {
  
    return await Areas.create(data);
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

const update = async (data) => {
  try {
    const area = await Areas.findByPk(data.id);
    if (!area) {
      throw 'Areas não encontrado';
    }
    return await Areas.update(data);
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

const destroy = async pk => {
  try {
    console.log(pk)
    const area = await Areas.findByPk(pk);
    console.log(area)
    if (!area) {
      throw 'Areas não encontrada';
    }
    return await area.destroy()
    
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

export default { findAll, add, update, destroy };
