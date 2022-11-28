const express = require('express');
const { homeView } = require('../controllers/home-controller.js');
const { spotifyConnect, spotifyCallback } = require('../controllers/spotify-connect-controller.js');
const router = express.Router();

// GET
router.get('/spotify-connect', spotifyConnect);
router.get('/callback', spotifyCallback);
router.get('/', homeView);

module.exports = router;