const Services = require('../services/Services.js');
const levelsServices = new Services('Levels');

class LevelController {

    static async displayAllLevels(req, res){
        try {
          const allLevels = await levelsServices.getAllRecords()
          return res.status(200).json(allLevels)  
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

      static async selectALevel (req, res) {
        const { id } = req.params
        try {
          const aLevel = await levelsServices.getrecord(Number(id))
          return res.status(200).json(aLevel)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

      static async createLevel (req, res) {
        const newLevel = req.body
        try {
          const newLevelCreated = await levelsServices.createRecord(newLevel)
          return res.status(200).json(newLevelCreated)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

      static async updateLevel (req, res) {
        const { id } = req.params
        const newInfos = req.body
        try {
          await levelsServices.updateRecord(newInfos, Number(id))
          const updatedLevel = await levelsServices.getrecord(Number(id))
          return res.status(200).json(updatedLevel)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

      static async deleteLevel (req, res) {
        const { id } = req.params
        try {
          await levelsServices.deleteRecord(Number(id))
          return res.status(200).json({ mensagem: `Level ${id} removed successfully`}) 
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

      static async restoreLevel (req, res) {
        const {id} = req.params
        try{
           await levelsServices.restoreRegister(Number(id))
           return res.status(200).json({message:`id ${id} restored` })
        }catch(error){
          return res.status(500).json(error.message)
        }
      }
}

module.exports = LevelController
