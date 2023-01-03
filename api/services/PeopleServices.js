const Services = require('./Services.js');
const Sequelize = require('sequelize');

class PeopleServices extends Services {
    constructor(){
        super('People')
        this.enrollments = new Services('Enrollments')
    }
    
    async getActiveRecords(where = {}){
        return database[this.modelName].findAll({
            where: {...where} } )
    }

    async getAllRecords(where = {}){
        return database[this.modelName]
        .scope('all')
        .findAll({where: {...where} } )
    }

    async cancelPeopleAndEnrollments(studentId){
        return database.sequelize.transaction(async transaction =>{
            await super.updateRecord({ativo:false}, studentId, 
            {transaction: transaction})
            await this.enrollments.updateRecords({status:'cancelado'},
            {student_id: studentId}, { transaction: transaction})
        }) 
    }

    async takeEnrollmentsPerStudent(where = {}) {
      const enrollments = await database[this.modelName]
      .findOne({where: {...where}})
      return enrollments.getEnrolledClasses()
    }
}
module.exports = PeopleServices;
