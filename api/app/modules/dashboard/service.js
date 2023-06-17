import Model from '../sequelize'
const { Pessoas, Condominios, Despesas, Moradores } = Model
const Op = Model.Sequelize.Op;

const receita = async (condominio) => {
  let whereCondo =
    condominio
      ? { required: true, where: { condominio_id: condominio } }
      : ''

  const query = {
    where: { pagante: 'true' },
    include: [
      {
        model: Pessoas,
        ...whereCondo
      }
    ]
  }
  const moradores = await Moradores.findAll(query)
  const condo = await Condominios.findByPk(condominio)
  const mensalidade = condo.mensalidade
  const total = mensalidade * (moradores.length + 1)
  const response = { receita: total }
  
  return response
}

const donut = async (condominio) => {
  let whereCondo =
    condominio
      ? { required: true, where: { id: condominio } }
      : ''

  const query1 = {
    where: { pagante: 'true' },
    include: [
      {
        model: Pessoas,
        ...whereCondo
      }
    ]
  }
  const moradores = await Moradores.findAll(query1)
  const condo = await Condominios.findByPk(condominio)
  const mensalidade = condo.mensalidade
  const receita = mensalidade * (moradores.length + 1)
  var last30Days = new Date().setDate(new Date().getDate() - 30)
  const query = {
    where: {
      tipo: 'Frequente',
      vencimento: { [Op.between]: [new Date(last30Days), new Date()] }
    },
    order: [['createdAt', 'ASC']],
    include: [
      {
        model: Condominios,
        ...whereCondo
      }
    ]
  };
  let despesas = await Despesas.findAll(query)
  var response = []
  for (let despesa of despesas) {
    despesa.label = despesa.descricao
    despesa.value = despesa.valor * 100 / receita
    despesa.color = gera_cor()
    response.push(despesa)
  }
  return response
};

// gera uma cor aleatória em hexadecimal
function gera_cor() {
  var hexadecimais = '0123456789ABCDEF';
  var cor = '#';

  // Pega um número aleatório no array acima
  for (var i = 0; i < 6; i++) {
    //E concatena à variável cor
    cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
}

export default { receita, donut };
