const express = require('express');
const { homeView } = require('../controllers/home-controller.js');
const router = express.Router();

// GET
router.get('/home', homeView);
router.get('/', homeView);

module.exports = router;