const express = require('express');
const router = express.Router();
const characterController = require('../controllers/character.controller.js');

router.get('/data', characterController.getData);

module.exports = router;
