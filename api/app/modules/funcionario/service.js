import Model from '../sequelize';
const { Funcionarios, Pessoas } = Model;

const findAll = async (condominio) => {
  let whereCondo =
  condominio
    ? { required: true, where: { condominio_id: condominio } }
    : '';

const query = {
  include: [
    {
      model: Pessoas,
      ...whereCondo
    }
  ]
};

return await Funcionarios.findAll(query);
  
};

const getByPk = async pk => {
    return await Funcionarios.findByPk(pk,{include: {model: Pessoas}});
};

const add = async data => {
  try {
    let pessoa = await Pessoas.create(data.pessoa)
    data.pessoa_id = pessoa.id;
    return await Funcionarios.create(data);
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

const update = async (data) => {
  try {
    const pessoa = await Pessoas.findByPk(data.pessoa.id)
    if (!pessoa) {
      throw 'Pessoas não encontrada'
    }
    await pessoa.update(data.pessoa)
    const funcionario = await Funcionarios.findByPk(data.id)
    return await funcionario.update(data)
  } catch (error) {
    throw 'Ocorreu um erro no banco'
  }
}

const destroy = async pk => {
  try {
    const fucionario = await Funcionarios.findByPk(pk);
    const pessoa = await Pessoas.findByPk(fucionario.pessoa_id)
    if (!fucionario) {
      throw 'Funcionario não encontrado';
    }
    await fucionario.destroy()
    
    return await pessoa.destroy();
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

export default { findAll, getByPk, add, update, destroy };
