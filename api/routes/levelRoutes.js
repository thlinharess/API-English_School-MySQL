const Router = require('express');
const LevelController = require('../controllers/LevelController.js');

const router = Router();

router
  .get('/levels',LevelController.displayAllLevels)
  .get('/levels/:id',LevelController.selectALevel)
  .post('/levels',LevelController.createLevel)
  .post('/levels/:id/restore/',LevelController.restoreLevel)
  .put('/levels/:id',LevelController.updateLevel)
  .delete('/levels/:id',LevelController.deleteLevel)

module.exports = router;