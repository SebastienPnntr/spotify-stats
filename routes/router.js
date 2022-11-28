const express = require('express');
const { homeView } = require('../controllers/home-controller.js');
const { generateView } = require('../controllers/generate-controller.js');
const { spotifyConnect, spotifyCallback } = require('../controllers/spotify-connect-controller.js');
const router = express.Router();

// GET
router.get('/spotify-connect', spotifyConnect);
router.get('/callback', spotifyCallback);
router.get('/generate', generateView);
router.get('/home', homeView);

// Default root
router.get('/', homeView);

module.exports = router;