import Model from '../sequelize';
const { Reservas, Moradores , Areas, Pessoas } = Model;

const findAll = async (condominio) => {
  let where =
  condominio
    ? { required: true, where: { condominio_id: condominio } }
    : '';

const query = {
  include: [
    {
      model: Areas,
      ...where,
    },
    {
      model: Moradores
    }

  ]
};
return await Reservas.findAll(query);
  
};

const findForArea = async (condominio,area) => {
  let where =
  condominio
    ? { required: true, where: { condominio_id: condominio, id: area } }
    : '';

const query = {
  include: [
    {
      model: Areas,
      ...where,
    },
    {
      model: Moradores,
      include:[
        {
          model: Pessoas
        }
      ]
    }

  ]
};
return await Reservas.findAll(query);
  
};

const add = async data => {
  try {

      const valida_data_inicio = await Reservas.findAll({
          where:{
            data_inicio: { "$between": [data.data_inicio,data.data_fim]}
        }
      })
      if(valida_data_inicio)  throw 'Horário alocado para outra reserva ';
     
    return await Reservas.create(data);
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

const update = async (data) => {
  try {
    const Reservas = await Reservas.findByPk(data.id);
    if (!Reservas) {
      throw 'Reservas não encontrado';
    }
    return await Reservas.update(data);
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

const destroy = async pk => {
  try {
    console.log(pk)
    const Reservas = await Reservas.findByPk(pk);
    console.log(Reservas)
    if (!Reservas) {
      throw 'Reservas não encontrada';
    }
    return await Reservas.destroy()
    
  } catch (error) {
    throw 'Ocorreu um erro no banco';
  }
};

export default { findAll,findForArea, add, update, destroy };
