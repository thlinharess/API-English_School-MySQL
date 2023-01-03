'use strict';

module.exports = {
  up: (QueryInterface, Sequelize) => {
    return QueryInterface.bulkInsert('Classes', [
			{
				start_date: "2020-02-01",
				level_id: 1,
				docente_id: 3,
				createdAt: new Date(),
				updatedAt: new Date()				 
			},
			{
				start_date: "2020-02-01",
				level_id: 2,
				docente_id: 3,
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				start_date: "2020-02-01",
				level_id: 3,
				docente_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()			
				}
      ], {})
    },

  down: (QueryInterface, Sequelize) => {
    return QueryInterface.bulkInsert('Classes');
  }
};
