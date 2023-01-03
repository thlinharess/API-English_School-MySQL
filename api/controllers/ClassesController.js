const {ClassesServices} = require('../services');
const classesServices = new ClassesServices();

const sequelize = require('sequelize');
const Op = sequelize.Op;

class ClassesController {
    
    static async displayAllClasses(req, res) {
        const {start_date, end_date} = req.query
        const where = {}
        start_date || end_date ? where.start_date = {}: null
        start_date ? where.start_date[Op.gte] = start_date : null
        end_date ? where.start_date[Op.lte] = end_date : null
        try {
          const allClasses = await classesServices.getAllRecords(where)
          return res.status(200).json(allClasses)
        }catch(error){
         return res.status(500).json(error.message)
        }
    }
    
    static async selectAClass (req, res) {
        const {id} = req.params
        try{
         const oneClass = await classesServices.getrecord(Number(id))
        return res.status(200).json(oneClass)
        }catch(error) {
         return req.status(500).json(error.message)
        }
    }

    static async createClass (req, res) {
        const newClass = req.body
        try{
        const newClassCreated = await classesServices.createRecord(newClass)
        return res.status(200).json(newClassCreated)
        }catch(error){
        return req.status(500).json(error.message)
        }
    }

    static async updateClass (req, res) {
        const {id} = req.params
        const newInfos = req.body
        try{
          await classesServices.updateRecord(newInfos, id)
          const classupdated = await classesServices.getrecord(Number(id))
          return res.status(201).json(classupdated)
        }catch(error) {
        return res.status(500).json(error.message)
        }
    }

    static async deleteClass (req, res) {
        const {id} = req.params
        try{
           await classesServices.deleteRecord(Number(id))
           return res.status(200).json({message: `Class ${id} removed successfully`})
        }catch(error) {
           return res.status(500).json(error.message)
        }
    }

    static async restoreClass(req, res){
        const {id} = req.params
        try{
            await classesServices.restoreRegister(Number(id))
            return res.status(200).json({message: `id ${id} restored succsessfully`})
        }catch(error){
         return res.status(500).json(error.message)
        }
    }
}

module.exports = ClassesController