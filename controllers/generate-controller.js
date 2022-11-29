var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi();

const generateView = (req, res) => {
  if (req.query.access_token == "undefined") {
    res.redirect('home');
    throw 'You didn\'t accept the spotify accesss.';
  }

  spotifyApi.setAccessToken(req.query.access_token);

  // Get 6m top artists
  /*spotifyApi.getMyTopArtists()
    .then(function (data) {
      let topArtists = data.body.items;
      console.log(topArtists);
    }, function (err) {
      console.log('Something went wrong!', err);
    });

  // Get 6m top tracks
  spotifyApi.getMyTopTracks()
    .then(function (data) {
      let topTracks = data.body.items;
      console.log(topTracks);
    }, function (err) {
      console.log('Something went wrong!', err);
    });*/

  res.render('generate', {

  })
}

module.exports = {
  generateView
};