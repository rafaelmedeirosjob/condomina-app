import Model from '../sequelize';
const { Usuarios, Moradores, Pessoas,Condominios } = Model;

const getUserSindico = async (user) => {
  try {
    const whereSindico =
      user.pessoa_id
        ? { required: true, where: { pessoa_id: user.pessoa_id, sindico: 'true' } }
        : '';

    const query = {
      attributes: ['id','nome','caixa'],
      include: [
        {
          model: Pessoas,
          attributes: ['nome'],
          include: [
            {
              attributes: ['sindico'],
              model: Moradores,
            ...whereSindico,
            }
          ]
        }
      ]
    };
     const condominio = await Condominios.findOne(query);
    if(!condominio) throw { message : 'Este morador não é um sindico'}
    return condominio;
  } catch (e) {
    throw e;
  }
};

const getUserFromEmail = async (email) => 
{
  try {
    return await Usuarios.findOne({  where: { email },include:[{model:Pessoas,include:[{model:Moradores}]} ]});
  } catch (e) {
    throw e;
  }
}

const findAll = async () => {
  return await Usuarios.findAll();
};

const findByPk = async id => {
  try {
    const user = await Usuarios.findByPk(id);
    if (!user) throw { message: 'Usuarios not found' };
    return user;
  } catch (e) {
    throw e;
  }
};

const create = async user => {
  return await Usuarios.create(user);
};

const update = async (id, user) => {
  try {
    const user = Usuarios.findByPk(id);
    if (!user) throw { message: 'Usuarios not found' };
    return user.update(user);
  } catch (e) {
    throw e;
  }
};

export default { getUserSindico, getUserFromEmail, findAll, findByPk, create, update };
