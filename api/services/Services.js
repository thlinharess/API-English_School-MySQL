const { where } = require('sequelize')
const Sequelize = require('sequelize')
const database = require('../models')

class Services {
    constructor (modelName) {
        this.modelName = modelName
    }

    async getAllRecords(where = {}) {
    return database[this.modelName].findAll({where: { ...where}})
  }

    async getrecord(where = {}) {
     return database[this.modelName].findOne({ where: {...where}})
  }

    async createRecord(data){
     return database[this.modelName].create(data)
  }

  async updateRecord(updatedData, id){
    return database[this.modelName]
    .update(updatedData, {where: {id: id} } )
  }

  async updateRecords(updatedData, where = {}){
    return database[this.modelName]
    .update(updatedData, {where: {...where} } )
  }

   async deleteRecord(id){
    return database[this.modelName].destroy({
      where: { id: id}})
  }
  
  async restoreRegister(id){
    return database[this.modelName].restore({
      where: {id: id}})
  }

  async FindAndCountRecords(where = {}, agregators){
    return database[this.modelName]
    .findAndCountAll({where: {...where}, ...agregators})
   }


  

}
module.exports = Services;