import Model from '../sequelize';
const { Condominios } = Model;

const getCaixa = async (condominio) => {

    let condo = await Condominios.findByPk(condominio)
    return { caixa: condo.caixa}
};

export default { getCaixa }
