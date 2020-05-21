var request = require('request');
var options = {
  url: 'https://lidemy-http-challenge.herokuapp.com/api/v3/deliver_token',
  headers: {
    'origin': 'lidemy.com',
  }
};
function callback(error, response, body) {
  console.log(body);
  console.log(response)
}
request.get(options, callback);


