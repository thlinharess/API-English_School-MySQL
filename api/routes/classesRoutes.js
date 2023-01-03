const Router = require('express');
const ClassesController = require('../controllers/ClassesController.js')

const router = Router();

router
   .get('/classes',ClassesController.displayAllClasses)
   .get('/classes/:id',ClassesController.selectAClass)
   .post('/classes',ClassesController.createClass)
   .post('/cleasses/:id/restore/',ClassesController.restoreClass)
   .put('/classes/:id',ClassesController.updateClass)
   .delete('/classes/:id',ClassesController.deleteClass)

   module.exports = router;