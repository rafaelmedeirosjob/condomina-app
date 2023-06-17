import Model from '../sequelize'
const { Temas } = Model

const findAll = async () => {
return await Temas.findAll()
}


export default { findAll }
