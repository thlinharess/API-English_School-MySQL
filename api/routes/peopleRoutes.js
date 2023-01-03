const Router = require('express');
const PeopleController = require('../controllers/PeopleController.js');
const EnrollmentsController = require('../controllers/EnrollmentsConroller.js');
const router = Router();

router
  .get('/people', PeopleController.displayAllPeople)
  .get('/people/active',PeopleController.displayActivePeople)  
  .get('/people/:id', PeopleController.selectAPerson)
  .get('/people/:studentId/enrollments',EnrollmentsController.displayallEnrollmentsForStudent)
  .get('/people/:studentId/enrollments/:enrollmentId',EnrollmentsController.displayAEnrollment)
  .get('/people/enrollments/:classId/confirmed',EnrollmentsController.viewEnrollmentsByClass)
  .get('/people/enrollments/crowded',EnrollmentsController.viewFullClasses)
  .post('/people', PeopleController.createPerson)
  .post('/people/:id/restore/',PeopleController.restorePerson)
  .post('/people/:studentId/cancel', PeopleController.cancelPerson)
  .post('/people/:studentId/matricula/:matriculaId/restore', EnrollmentsController.restoreEnrollment)  
  .put('/people/:id', PeopleController.updatePerson)
  .post('/people/:studentId/enrollments',EnrollmentsController.createEnrollment)
  .put('/people/:studentId/enrollments/:enrollmentId',EnrollmentsController.updateEnrollment)
  .delete('/people/:id',PeopleController.deletePerson)
  .delete('/people/:studentId/enrollments/:enrollmentId',EnrollmentsController.deleteEnrollment)

  module.exports = router;