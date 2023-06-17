import Model from '../sequelize';
import bcrypt from 'bcrypt'
const { Moradores, Usuarios, Pessoas, Inadimplencias,Condominos } = Model;

const findAll = async (req) => {
  let whereCondo =
    req.condominio
      ? { required: true, where: { condominio_id: req.condominio } }
      : '';

  const query = {
    include: [
      {
        model: Pessoas,
        ...whereCondo
      },
      { 
        model: Condominos
      }
    ],
    offset: ((req.page-1)*req.limit),
    limit: req.limit
  };

  return await Moradores.findAndCountAll(query);

};

const getByPk = async pk => {
  return await Moradores.findByPk(pk,{ include: {model: Pessoas}})
}

const findAllInadiplentes = async (condominio) => {
  let whereCondo =
    condominio
      ? { required: true, where: { condominio_id: condominio } }
      : '';

  const query = {
    where: { ativo: true },
    include: [
      {
        model: Moradores,
        include: [
          {
            model: Pessoas,
            ...whereCondo
          }
        ]
      }
    ]
  };

  return await Inadimplencias.findAll(query);

};

const add = async data => {
    let pessoa = await Pessoas.create(data.pessoa)
    data.pessoa_id = pessoa.id;
    let user = {}
    await bcrypt.hash('condomina123', 8).then(function(hash) 
    {
      user = {
        "email": data.email,
        "password": hash,
        "pessoa_id": pessoa.id
      }
    })
    
    await Usuarios.create(user)
    let morador = await Moradores.create(data)
    if(data.cpf != null)
    {
      data.cpf = data.cpf.replace(/\D/g,'');
      await Condominos.create({cpf: data.cpf, morador_id: morador.id})
    }
    
    return morador
}

const update = async data => {
    const pessoa = await Pessoas.findByPk(data.pessoa.id);
    if (!pessoa) {
      throw 'Pessoas não encontrada'
    }
    await pessoa.update(data.pessoa)
    const morador = await Moradores.findByPk(data.id)
    return await morador.update(data)
};

const destroy = async pk => {
    const morador = await Moradores.findByPk(pk);
    if (!morador) {
      throw 'Moradores não encontrado';
    }
    await morador.destroy()

    const pessoa = await Pessoas.findByPk(morador.pessoa_id);
    if (!pessoa) {
      throw 'Pessoas não encontrado';
    }
    return await pessoa.destroy();
};

export default { findAll, getByPk, findAllInadiplentes, add, update, destroy };
