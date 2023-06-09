const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const tableController = require('../controllers/tableController');

// Routes that maps the '/<name>' endpoint to the related controller function
router.post('/users', userController.createUser);
router.post('/liveRow', tableController.createLiveRow);
router.post('/giveRow', tableController.createGiveRow);
router.post('/growRow', tableController.createGrowRow);
router.post('/oweRow', tableController.createOweRow);

module.exports = router;