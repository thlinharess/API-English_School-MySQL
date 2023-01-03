module.exports = {
  up: (QueryInterface, Sequelize) => {
    return QueryInterface.bulkInsert('People', [
    {
      name: 'Luis Gustavo',
      ativo: true,
      email: 'luis@gust.com',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
      name:'Vanessa Lima',
      ativo:true,
      email:"Vanessa@lima.com",
      role: "docente",
      createdAt: new Date(),
      updatedAt: new Date()
  }
 ], {});
},
down: (QueryInterface, Sequelize) => {
  return QueryInterface.bulkInsert('People',null, {})
  }
}
