const { Sequelize } = require('../models');

const {PeopleServices} = require('../services');
const peopleServices = new PeopleServices();


class PeopleController {

   static async displayActivePeople (req, res) {
    try{
      const ActivePeople = await peopleServices.getActiveRecords()
      return res.status(200).json(ActivePeople);
    }catch(error){
      return res.status(500).json(error.message);
    }
   }

   static async displayAllPeople (req, res) {
    try{
      const allPeople = await peopleServices.getAllRecords()
      return res.status(200).json(allPeople);
    }catch(error){
      return res.status(500).json(error.message);
    }
   }        

   static async selectAPerson (req, res) {
    const {id} = req.params
    try{
        const Aperson = await peopleServices.getrecord(Number(id))
        return res.status(200).json(Aperson)
    }catch(error){
        return res.status(500).json(error.message);
    }
   }

   static async createPerson (req, res) {
    const newPerson = req.body
    try{
        const newPersonCreated = await peopleServices.createRecord(newPerson)
        return res.status(200).json(newPersonCreated);
    }catch(error){
        return res.status(500).json(error.message);
    } 
   }

   static async updatePerson (req, res) {
    const {id} = req.params
    const newInfos = req.body
    try{
        await peopleServices.updateRecord(newInfos, (Number(id)))
        const personUpdated = await peopleServices.getrecord(Number(id))
        return res.status(201).json(personUpdated);   
     }catch(error){
        return res.status(500).json(error.message);
    }
   }
   
   static async deletePerson (req,res) {
    const {id} = req.params
    try{
      await peopleServices.deleteRecord(Number(id))
      return res.status(200).json({message: `Person ${id} removed successfully`})
    }catch(error){
      return res.status(500).json(error.message);
    }
   }

   static async restorePerson (req, res) {
    const {id} = req.params
    try {
      await peopleServices.restoreRegister(Number(id))
      return res.status(200).json({message: `id ${id} restored`})
    }catch(error){
      return res.status(500).json(error.message);
    }
   }

   static async cancelPerson (req, res) {
    const {studentId} = req.params
    try {
      await peopleServices.cancelPeopleAndEnrollments(Number(studentId))
      return res.status(200).json({message:`Registrations ref. to student ${studentId} canceled`})
    }catch(error){
      return res.status(500).json(error.message);
    }
   }

}

module.exports = PeopleController
