const SpotifyWebApi = require('spotify-web-api-node');
const request = require('request')
const querystring = require('querystring')

const SPOTIFY_CLIENT_ID = "bab2ed2927ba415a91611c0e7f7f117b";
const SPOTIFY_CLIENT_SECRET = "4dcd875871ff40868fe678779d303c83";

let redirect_uri = 'http://localhost:3000/callback';

const spotifyConnect = (req, res) => {
    res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: SPOTIFY_CLIENT_ID,
      scope: 'user-read-private user-read-email',
      redirect_uri
    }))
}

const spotifyCallback = (req, res) => {
  let code = req.query.code || null
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET
      ).toString('base64'))
    },
    json: true
  }
  request.post(authOptions, function(error, response, body) {
    var access_token = body.access_token
    let uri = process.env.FRONTEND_URI || 'http://localhost:3000'
    res.redirect(uri + '?access_token=' + access_token)
  })
}

module.exports = {
  spotifyConnect,
  spotifyCallback
};