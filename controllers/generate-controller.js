var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi();

const generateView = (req, res) => {
    spotifyApi.setAccessToken(req.query.access_token);
    
    spotifyApi.getMyTopArtists()
  .then(function(data) {
    let topArtists = data.body.items;
    console.log(topArtists);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

    res.render('generate', {

    })
}

module.exports = {
    generateView
};