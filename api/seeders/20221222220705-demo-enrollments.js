'use strict';

module.exports = {
  up: (QueryInterface, Sequelize) => {
    return QueryInterface.bulkInsert('Enrollments',[
			{
				status: "confirmado",
				student_id: 1,
				class_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
			status: "confirmado",
			student_id: 2,
			class_id: 1,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			student_id: 3,
			class_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	}
], {})
},

  down: (QueryInterface, Sequelize) => {
    return QueryInterface.bulkInsert('Enrollments');
  }
};
