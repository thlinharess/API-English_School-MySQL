const Sequelize = require('sequelize');

const {EnrollmentsServices} = require('../services');
const enrollmentsServices = new EnrollmentsServices();

class EnrollmentsController {
    
    static async displayAEnrollment (req, res) {
        const {studentId, enrollmentId} = req.params
        try{
           const aEnrollment = await enrollmentsServices
           .getrecord({id: enrollmentId, student_id: studentId})
            return res.status(200).json(aEnrollment)
        }catch(error){
            return res.status(500).json(error.message);
        }
       }   

    static async createEnrollment (req, res) {
        const {studentId} = req.params
        const newEnrollment = {...req.body, student_id: Number(studentId)}
        try{
         const newEnrollmentCreated = await enrollmentsServices.createRecord(newEnrollment)
         return res.status(200).json(newEnrollmentCreated)
        }catch(error){
          return res.status(500).json(error.message);
        }
       }

    static async updateEnrollment (req, res) {
        const {studentId, enrollmentId} = req.params
        const newInfos = req.body
        try{
         await enrollmentsServices.updateRecords(newInfos,
          {id: Number(enrollmentId),student_id: (studentId)})
          return res.status(200).json({menssage: `id ${enrollmentId} updated`})
        }catch(error){
          return res.status(500).json(error.message);
       }
       }

    static async deleteEnrollment (req, res) {
        const { enrollmentId } = req.params
        try{
          await enrollmentsServices.deleteRecord(Number(enrollmentId))
          return res.status(200).json({massege: ` Enrollment ${enrollmentId} removed successfully`})
        }catch(error){
          return res.status(500).json(error.message);
        }
       } 

    static async restoreEnrollment(req, res){
        const { enrollmentId } = req.params
        try{
         await enrollmentsServices.restoreRegister(Number(enrollmentId))
         return res.status(200).json({message:`id ${enrollmentId} restored successfully`})
        }catch(error){
          return res.status(500).json(error.message);
        }
       }

    static async viewEnrollmentsByClass (req, res) {
        const { classId } = req.params
        try {
          const allTheEnrollments = await enrollmentsServices.FindAndCountRecords(
            {class_id: Number(classId),status: 'confirmado'},
            {limit:20, order: [['student_id', 'DESC']] })
          return res.status(200).json(allTheEnrollments)
        }catch(error){
          return res.status(500).json(error.message);
        }
       }

    static async displayallEnrollmentsForStudent (req, res) {
        const { studentId } = req.params
        try{
          const enrollments = await enrollmentsServices
         .getAllenrollemnts(studentId)
          return res.status(200).json(enrollments)
        }catch(error){
          return res.status(500).json(error.message);
        }
       }

       static async viewFullClasses (req, res) {
        const classCapacity = 3
        try {
         const crowdedClasses = await enrollmentsServices
         .FindAndCountRecords({status:'confirmado'},
         {
         attributes:['class_id'],
         group:['class_id'],
         having: Sequelize.literal(`count(class_id) >= ${classCapacity}`)
         })
         return res.status(200).json(crowdedClasses.count)
        }catch(error){
          return res.status(500).json(error.message);
        }
       }
    
    static async viewEnrollmentsByClass (req, res) {
    const { classId } = req.params
    try {
      const allTheEnrollments = await enrollmentsServices.FindAndCountRecords(
        {class_id: Number(classId),status: 'confirmado'},
        {limit:20, order: [['student_id', 'DESC']] })
      return res.status(200).json(allTheEnrollments)
    }catch(error){
      return res.status(500).json(error.message);
    }
       }

    
}

module.exports = EnrollmentsController;