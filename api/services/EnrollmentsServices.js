const Services = require('./Services.js');
const database = require('../models');

class EnrollmentsServices extends Services {
    constructor(){
        super('Enrollments')
    }

    async getAllenrollemnts(studentId) {
        return database[this.modelName]
        .findAll({where: {student_id: Number(studentId)}})
      }

}

module.exports = EnrollmentsServices;
