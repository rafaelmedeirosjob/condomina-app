import Model from '../sequelize'
const { Assembleias, Condominios, Pautas, Temas} = Model


const findAll = async (req) => {
  let where =
  req.condominio
    ? { required: true, where: { id: req.condominio } }
    : ''

const query = {
  include: [
    {
      model: Condominios,
      ...where
    },
    {
      model: Pautas
    }
  ],
  offset: ((req.page-1)*req.limit),
  limit: req.limit
}

return await Assembleias.findAndCountAll(query)
  
}

const getByPk = async pk => {
    return await Assembleias.findByPk(pk)
}

const add = async data => {
    var temas = await Temas.findAll()
    const assembleia = await Assembleias.create(data.assembleia)
    data.temas_html.forEach(async function(tema_html)
    {
      if(tema_html.tema.id == 9)
      {
        if(isNullOrWhitespace(tema_html)) 
        {
          throw "Tema que está sendo criado não pode ser em branco"
        }
        const tema = temas.find(t=> t.descricao === tema_html.novo_tema)
        if(tema==null)
        {
          let tema = await Temas.create({descricao: tema_html.novo_tema})
          await Pautas.create({assembleia_id: assembleia.id, tema_id: tema.id, votos_aprovacao:0, votos_deferidos: 0, votos_indeferidos:0})
        }
          await Pautas.create({assembleia_id: assembleia.id, tema_id: tema.id, votos_aprovacao:0, votos_deferidos: 0, votos_indeferidos:0})
      }else
      {
        await Pautas.create({assembleia_id: assembleia.id, tema_id: tema_html.tema.id, votos_aprovacao:0, votos_deferidos: 0, votos_indeferidos:0})
      }
      return
    })
    
    return 'criado com sucesso'
}

function isNullOrWhitespace( input ) {
  return !input || !input.trim();
}

const update = async (data) => {
    const assembleia = await Assembleias.findByPk(data.id)
    if (!assembleia) {
      throw 'Assembleias não encontradas'
    }
    return await assembleia.update(data)
}

const destroy = async pk => {
    const assembleia = await Assembleias.findByPk(pk)
    if (!assembleia) {
      throw 'Assembleias não encontrada'
    }
    return await assembleia.destroy()
}

export default { findAll, getByPk, add, update, destroy }
