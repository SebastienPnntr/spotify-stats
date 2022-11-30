var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi();

const generateView = (req, res) => {
  
    if (req.query.access_token == "undefined") {
      res.redirect('home');
      throw 'You didn\'t accept the spotify accesss.';
    }

    spotifyApi.setAccessToken(req.query.access_token);
    
    // Get 6m top artists
    spotifyApi.getMyTopArtists()
  .then(function(data) {
    let topArtists = data.body.items;
    let listArtist = [];
    topArtists.forEach(element => {
      listArtist.push(element.name);
    });
    console.log(listArtist);
    res.render('generate', {
      groups: listArtist
    })
  }, function(err) {
    console.log('Something went wrong!', err);
    res.redirect('home');
    throw 'Something went wrong! '+ err;
  });
}

module.exports = {
  generateView
};